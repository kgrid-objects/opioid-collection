#!/user/bin/perl

#
# Get All RxNORM SCDs and SBDs for a THERAPEUTIC CATEGORY - BENZODIAZEPINE (BZD) VERSION
#
# Version 0.1 of June 10, 2018
#
# Written By:  Allen Flynn
#

# BZD COVERAGE
# IN = INGREDIENTS FROM FDASPL has_Chemical_Structure CLASS ID = D001552

# https://rxnav.nlm.nih.gov/REST/rxclass/classMembers.json?classId=D001552&relaSource=FDASPL&rela=has_Chemical_Structure&ttys=IN



use JSON::Parse 'parse_json';
use JSON qw( decode_json );
use Data::Dumper;
use XML::Parser;
use Capture::Tiny qw/ capture /;


#Boot acknowledge
print "The RxNORM SCD/SBD GETTER Has Started... \n";
print "\n";

#RXNORM system check
system("curl","-H","Accept:application/json","https://rxnav.nlm.nih.gov/REST/version");
print "\n";

#REWRITE AN OUTPUT FILE EACH TIME THIS IS RUN
open (my $fh1,'>','BENZODIAZEPINE_SCDSBDGetterOutput.txt');

#ARRAYS TO HOLD LISTS OF RXNORM INGREDIENT (IN) RXCUIS, RELATED SCD RXCUIS, RELATED SBD RXCUIS
my @ingredientList;
my @SCDList;
my @SBDList;

#BUILD FIRST PORTION OF INGREDIENT LIST
#SOURCE = FDASPL, RELATION = has_Chemical_Structure, CODE = D001552, FOR BENZODIAZEPINE INGREDIENTS
my @args = (          '-X', "GET",
                      '-H',  "Cache-Control: no-cache",
                      'https://rxnav.nlm.nih.gov/REST/rxclass/classMembers.json?classId=D001552&relaSource=FDASPL&rela=has_Chemical_Structure&ttys=IN'
);

my ($stdout,$stderr,$exit) = capture {
         system 'curl', @args;
};

#print $stdout;

my $decoded = decode_json($stdout);

my @ingreds = @{ $decoded->{'drugMemberGroup'}->{"drugMember"}};
  foreach my $s (@ingreds) {
         push (@ingredientList, $s->{"minConcept"}{"rxcui"});
     }
#print "\n\n" . scalar(@ingredientList);

#ADD CLORAZEPATE AS INGREDIENT BECAUSE IT IS NOT ON THE RXNORM LIST
push (@ingredientList,2353);

print "Ingredient List built \n";


#PRINT INGREDIENT (IN) RXCUIS FROM SINGLE SOURCE, FDASPL
print $fh1 "RXNORM BENZODIAZEPINE INGREDIENT CODE LIST \n\n";
foreach (@ingredientList) {
  print $fh1 "$_\n";
  }
print $fh1 "\n";


#USING ALL INGREDIENT CODES, RETREIVE ALL RELATED SEMANTIC CLINICAL DRUGS FROM RXNORM
#GET SCD RXCUIs
foreach (@ingredientList) {
  my $url1 = "https://rxnav.nlm.nih.gov/REST/rxcui/". $_ . "/related.json?tty=SCD";
  my $SCDresult = `curl -H Accept:application/json  -s $url1`;
  #print $SCDresult;
  #print "\n" . $url1;
  my $decoded3 = decode_json($SCDresult);
  #print $decoded3;
  my @stuff = @{ $decoded3->{'relatedGroup'}{'conceptGroup'} };
   foreach my $p (@stuff) {
          #print $p;
          my @SCDZ = @{ $p->{'conceptProperties'} };
               foreach my $k (@SCDZ) {
                   push (@SCDList, $k->{"rxcui"});
                   #print $k->{"rxcui"} . " ";
                  }
       }
   }

print "Semantic Clinical Drug (SCD) List Built \n";

#PRINT SCD RXCUIS
print $fh1 "RXNORM SEMANTIC CLINICAL DRUG CODE LIST \n\n";
  foreach (@SCDList) {
    print $fh1 "$_\n";
    }
print $fh1 "\n";


#USING ALL INGREDIENT CODES, RETREIVE ALL RELATED SEMANTIC BRANDED DRUGS FROM RXNORM
#GET SBD RXCUIs
foreach (@ingredientList) {
  my $url2 = "https://rxnav.nlm.nih.gov/REST/rxcui/". $_ . "/related.json?tty=SBD";
  my $SBDresult = `curl -H Accept:application/json  -s $url2`;
  my $decoded4 = decode_json($SBDresult);
  my @stuff2 = @{ $decoded4->{'relatedGroup'}{'conceptGroup'} };
   foreach my $q (@stuff2) {
          my @SBDZ = @{ $q->{'conceptProperties'} };
               foreach my $i (@SBDZ) {
                   push (@SBDList, $i->{"rxcui"});
                  }
       }
   }

print "Semantic Branded Drug (SBD) List Built \n";

#PRINT SCD RXCUIS
print $fh1 "RXNORM SEMANTIC BRANDED DRUG CODE LIST \n\n";
  foreach (@SBDList) {
    print $fh1 "$_\n";
    }
print $fh1 "\n";

#BUILD COMBINED FINAL LIST OF SCDs AND SBDs WITH OPIOID INGREDIENTS
my $finalSCDList = join ',', @SCDList;
my $finalSBDList = join ',', @SBDList;
my $finalList = $finalSCDList . "," . $finalSBDList;

print "JavaScript Array Written to File \n";

#PRINT ALL SCDs and SBDs WITH OPIOID INGREDIENTS IN FORMAT OF A JS ARRAY
print $fh1 "SCDs AND SBDs IN JAVASCRIPT ARRAY FORMAT \n\n";
    print $fh1 "[";
    print $fh1 $finalList;
    print $fh1 "];";
print $fh1 "\n";


close $fh1;
#End of program acknowledged here
print "\n";
print "End.\n";

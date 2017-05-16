#include<stdio.h>
#include<string.h>
void buildLPS(char pat[],int m,int lps[])
{
	int i=1,j=0;
	lps[0]=0;
	while(i<m){
		if(pat[i]==pat[j]){
			lps[i]=j+1;
			i++;
			j++;
		}
		else{
			if(j!=0)
				j=lps[j-1];
			else{
				lps[i]=0;
				i++;
			}
			
		}
	}
}
void KMP(char txt[],char pat[])
{
	int i=0,j=0,m,n;
	m=strlen(pat);
	n=strlen(txt);
	int lps[m];
	buildLPS(pat,m,lps);
	while(i<n){
		if(pat[j]==txt[i]){
			i++;
			j++;
		}
		if(j==m){
			printf("pat found at %d",i-j);
			j=lps[j-1];
		}
		if(i<n&&pat[j]!=txt[i]){
			if(j!=0)
				j=lps[j-1];
			else
				i++;
			
		}
	}
}
int main(){
	char txt[10],pat[10];
	printf("enter text");
	gets(txt);
	printf("%s",txt);
	printf("enter pattern");
	gets(pat);
	printf("%s",pat);
	KMP(txt,pat);
}

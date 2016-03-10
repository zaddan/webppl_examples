/*!
  \file dct.cpp
  DCT transform from JPEG example.
!*/
//#include "jpegEncoder.h"
#include <stdio.h>
#include <fstream>
#include <stdlib.h>
#include <sstream>
#include <assert.h>
//#include "globals.h"
#include <iostream>
#include <iterator>
using namespace std;


/*
#define c1d4 362L
#define c1d8 473L
#define c3d8 196L
#define c1d16 502L
#define c3d16 426L
#define c5d16 284L
#define c7d16 100L
*/

int c1d4= 362;
int c1d8= 473;
int c3d8= 196;
int c1d16= 502;
int c3d16= 426;
int c5d16= 284;
int c7d16= 100;

int LS(int r, int s) {
    return ((r) << (s));
}


int RS(int r, int s) {
    return ((r) >> (s));       
}


int MSCALE(int r) {
    return ((r) >> (9));       
}

int CLIP(int tmp)
{
   int tval=tmp;
   tval = (((tval < 0) ? (tval - 4) : (tval + 4)) / 8);
   if (tval < -1023)
   {
     tval = -1023;
   }
   else if (tval > 1023)
   {
     tval = 1023;
   }
	 return tval;
}


int dct_invocation = 0;
ofstream dct_out_file;
ifstream dct_in_file("dct_in.txt");

struct first_loop_context_t {
	bool dcten; 
	char inqueue[64];
	bool qen;
};


void dct_first_loop_helper(
 first_loop_context_t context, int tmp[64], int i)
{
  //yuv_t in_block[64];
	context.qen=context.dcten;
  if(context.dcten==false) return;
	//#pragma HLS PIPELINE
    //aptr = i;
    int v0 = context.inqueue[i*8+0];
    int v1 = context.inqueue[i*8+1];
    int v2 = context.inqueue[i*8+2];
    int v3 = context.inqueue[i*8+3];
    int v4 = context.inqueue[i*8+4];
    int v5 = context.inqueue[i*8+5];
    int v6 = context.inqueue[i*8+6];
    int v7 = context.inqueue[i*8+7];
    int a0 = LS((v0+ v7),  2); //AdditionOp     
    
    int c3 = LS((v0 + -1*v7),  2);//AdditionOp
    int a1 = LS((v1 + v6),  2);//AdditionOp 
    int c2 = LS((v1 +  -1*v6),  2);//AdditionOp
    int a2 = LS((v2 + v5),  2);//AdditionOp 
    int c1 = LS((v2 + -1*v5),  2);//AdditionOp
    int a3 = LS((v3 + v4),  2);//AdditionOp 
    int c0 = LS((v3 + -1*v4),  2);//AdditionOp
    int b0 = a0 + a3; //AdditionOp
    int b1 = a1 +  a2;//AdditionOp
    int b2 = a1 + -1*a2;//AdditionOp
    int b3 = a0 + -1*a3;//AdditionOp
    int b0b1Add1 = b0 + b1; //AdditionOp
    tmp[i] = MSCALE(c1d4 * (b0b1Add1));//MultiplicationOp

    int b0b1Sub1 = b0 + -1*b1; //AdditionOp
    tmp[i + 32] = MSCALE(c1d4 * (b0b1Sub1)); //MultiplicationOp
    
    int c3d8b2Mul = c3d8 * b2;//MultiplicationOp
    int c1d8b3Mul = c1d8 *  b3;//MultiplicationOp
    int c3d8b3Mul = c3d8 *  b3;//MultiplicationOp
    int c1d8b2Mul = c1d8 * b2;//MultiplicationOp
    
    tmp[i + 16] = MSCALE(c3d8b2Mul+ c1d8b3Mul);//AdditionOp
    tmp[i + 48] = MSCALE(c3d8b3Mul + -1*(c1d8b2Mul)); //AdditionOp
    
    int c2c1Temp =  c2 + -1*c1; //AdditionOp
    int c2c1Temp2 =  c2 +  c1;//AdditionOp
    
    
    
    int b0_2 = MSCALE(c1d4 *c2c1Temp);//MultiplicationOp
    int b1_2 = MSCALE(c1d4 * (c2c1Temp2));
    int a0_2 = c0 + b0_2;
    int a1_2 = c0 - b0_2;
    int a2_2 = c3 - b1_2;
    int a3_2 = c3 + b1_2;
    int c7d16a0Mul =  c7d16 * a0_2;
    int c1d16a3Mul = c1d16 * a3_2;
    int c3d16a2Mul =  c3d16 * a2_2;
    int c5d16a1Mul =  c5d16 * a1_2;
    int c5d16a2Mul =  c5d16 * a2_2;
    int c3d16a1Mul =  c3d16 * a1_2;
    int c7d16a3Mul =  c7d16 * a3_2;
    int c1d16a0Mul =  c1d16 * a0_2;
    tmp[i + 8] = MSCALE((c7d16a0Mul) + (c1d16a3Mul));
    tmp[i + 24] = MSCALE((c3d16a2Mul) - (c5d16a1Mul));
    tmp[i + 40] = MSCALE((c3d16a1Mul) + (c5d16a2Mul));
    tmp[i + 56] = MSCALE((c7d16a3Mul) - (c1d16a0Mul));
    

}


void dct_first_loop(first_loop_context_t context, int tmp[64]){
    int i; 
    for (i = 0; i < 8; i++) {
     dct_first_loop_helper(context, tmp, i); 
  }
}


struct second_loop_context_t {
    int tmp[64];
};




void dct_second_loop_helper(second_loop_context_t context, int outqueue[64], int i)
{

	//#pragma HLS PIPELINE
    //aptr = LS(i,  3);
    int v0 = context.tmp[i*8+0];// aptr++;
    int v1 = context.tmp[i*8+1]; //aptr++;
    int v2 = context.tmp[i*8+2]; //aptr++;
    int v3 = context.tmp[i*8+3]; //aptr++;
    int v4 = context.tmp[i*8+4];// aptr++;
    int v5 = context.tmp[i*8+5]; //aptr++;
    int v6 = context.tmp[i*8+6]; //aptr++;
    int v7 = context.tmp[i*8+7];
    int c3 = RS((v0 + -1*v7),  1);  //AdditionOp
    int a0 = RS((v0 +  v7),  1);//AdditionOp
    int c2 = RS((v1 + -1*v6),  1); //AdditionOp
    int a1 = RS((v1 +  v6),  1);//AdditionOp
    int  c1 = RS((v2 + -1*v5),  1); //AdditionOp
    int a2 = RS((v2 +  v5),  1);//AdditionOp
    int c0 = RS((v3 + -1*v4),  1); //AdditionOp
    int a3 = RS((v3 + v4),  1);//AdditionOp
    int b0 = a0 + a3;//AdditionOp 
    int b1 = a1 + a2;//AdditionOp
    int b2 = a1 + -1*a2;//AdditionOp
    int b3 = a0 + -1* a3;//AdditionOp
    int c1c2Sub = c2 + -1*c1; //AdditionOp
    int c1c2Add= c2 + c1; //AdditionOp
    int tb0 = MSCALE(c1d4 *  (c1c2Sub)); //MultiplicationOp
    int tb1 = MSCALE(c1d4 * (c1c2Add)); //MultiplicationOp
    int ta0 = c0 + tb0; //AdditionOp
    int ta1 = c0 + -1*tb0; //AdditionOp
    int  ta2 = c3 + -1*tb1; //AdditionOp
    int ta3 = c3 +  tb1; //AdditionOp

    int b0b1Add = b0 +  b1;  //AdditionOp
    int b0b1Sub = b0 + -1*b1; //AdditionOp 
    int c3d8b2Mul = c3d8 * b2;//MultiplicationOp
    int c1d8b3Mul = c1d8 *  b3;//MultiplicationOp
    int c3d8b3Mul = c3d8 *  b3;//MultiplicationOp
    int c1d8b2Mul = c1d8 * b2;//MultiplicationOp
    
    
    outqueue[i*8] 		=CLIP(MSCALE(c1d4 * (b0b1Add)));
    outqueue[i*8 + 4] =CLIP(MSCALE(c1d4 * (b0b1Sub)));
    outqueue[i*8 + 2] =CLIP(MSCALE((c3d8b2Mul) + (c1d8b3Mul)));
    
    
    outqueue[i*8 + 6] =CLIP(MSCALE((c3d8b3Mul) - (c1d8b2Mul)));
    outqueue[i*8 + 1] =CLIP(MSCALE((c7d16 * ta0) + (c1d16 * ta3)));
    outqueue[i*8 + 3] =CLIP(MSCALE((c3d16 * ta2) - (c5d16 * ta1)));
    
    

    
    
    outqueue[i*8 + 5] =CLIP(MSCALE((c3d16 * ta1) + (c5d16 * ta2)));
    outqueue[i*8 + 7] =CLIP(MSCALE((c7d16 * ta3) - (c1d16 * ta0)));
}

void dct_second_loop(second_loop_context_t context, int outqueue[64]) {
    int i; 
    for (i = 0; i < 8; i++) {
        dct_second_loop_helper(context, outqueue, i);
    }
}

void dct(
	bool dcten, 
	char inqueue[64], 
	int outqueue[64], 
	bool&qen)
{
 
  int tmp[64];
  qen=dcten;
  if(dcten==false) return;
   
  
  //----run the first loop
  first_loop_context_t first_loop_context_in;
  copy(inqueue, inqueue + 64, first_loop_context_in.inqueue);
  first_loop_context_in.dcten = dcten; 
  first_loop_context_in.qen = qen; 
  dct_first_loop(first_loop_context_in, tmp);
  
  //----run the 2nd loop 
  second_loop_context_t second_loop_context_in;
  copy(tmp, tmp+64, second_loop_context_in.tmp);
  dct_second_loop(second_loop_context_in, outqueue);
}



int main () {
    bool dcten;
    char inqueue[64];
    int outqueue[64];
    bool qen;
    
    //-----get the inputs 
    string line; 
    string buf;  //to dump the words within a string in
    int counter = 0; 
    ofstream test_in_file("test_in.txt");
    
    /* 
    if(dct_in_file.is_open()) {
       while(getline(dct_in_file, line)) {
           stringstream ss(line);
           while (ss >> buf) {
                inqueue[counter] = ((char*) buf.c_str())[0];
                test_in_file<<inqueue[counter] << " "; 
                counter +=1; 
                assert(counter <64 && "inqueue can not have more than 64 values");
           }
       }
       
     */  
    if(dct_in_file.is_open()) {
       while(getline(dct_in_file, line)) {
           
           for(int i =0 ; i < line.size(); i++) {
               inqueue[i] = line[i];
               /* 
               //was used for the case where inqueue was written with spaces inbetween chars 
                  if (i%2 == 0) {
                   inqueue[i/2] = line[i];
                   test_in_file << inqueue[i/2] << " ";
               }
             */ 
           }
       
       }  
       test_in_file.close();
       dct_in_file.close();
     } else {
       cout<<"unable to open the file"<<endl;
       exit(0);
   }
   dcten = true;   
   
   //-----run dct 
   dct(dcten, inqueue, outqueue, qen);
   
   
   
   //-----write the output
   dct_out_file.open("dct_out.txt",std::fstream::out | std::fstream::binary);

   dct_out_file << "outqueue: "<<endl;
   for (int i=0; i< 64; i++) {
       dct_out_file<< (int)outqueue[i]<<" ";
   }
   dct_out_file<<endl<<"qen "<<qen<<endl;
   dct_out_file.close();
}


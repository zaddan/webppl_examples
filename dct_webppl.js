//----file handling stuff
//the following really should be in another file
//---TODO: add them to another file and include that file
var get_file_lines = function(file_name) {
    var fs = require.call(null, 'fs');
    var fileContents = fs.readFileSync(file_name,'utf8');
    var file_lines = fileContents.toString().split('\n');
    return file_lines;
}



//-----------------------------------------------------------------
//-----------------List Handling Functions
//-----------------------------------------------------------------

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: car
////---------functionlity::: extracting the first element of a list
////----------------------------------------------------
////----------------------------------------------------
var car = function (array ) {
if (array.length == 0) {
    console.error("------nothing in the array to get the car for");
    return 0;
}
return array[0];
}


//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: cdr
////---------functionlity::: extracting the but first of an array
////----------------------------------------------------
////----------------------------------------------------
var cdr = function(array) {
  if (array.length == 0) {
    console.error("-----nothing in the array to get the cdr for");
    return 0;
  }
  return array.slice(1, array.length);
}


//-------------------------------------
//-------------statistic.js-----------
//-----------------------------------


//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: accumulate
////---------functionlity::: sigma of all the elements in  an array
////----------------------------------------------------
////----------------------------------------------------
var accumulate = function(array) {
  if (cdr(array).length == 0) {
     return (car(array));
  }else{
      return accumulate(cdr(array)) + (car(array));
  }
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: expectation
////---------functionlity::: expectation value of the elements in  an array
////----------------------------------------------------
////----------------------------------------------------
var expectation = function(array) {
   return accumulate(array)/array.length;
}


//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: mean 
////---------functionlity::: mean value of the elements in  an array
////----------------------------------------------------
////----------------------------------------------------
var mean = function(array) {
   return expectation(array);
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: variance_helper
////---------functionlity::: 
////----------------------------------------------------
////----------------------------------------------------
var variance_helper = function(array, mean) {
   if (cdr(array).length == 0) {
     return (Math.pow(car(array) - mean, 2));
  }else{
      return variance_helper(cdr(array), mean) + (Math.pow(car(array) - mean,2));
  }
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: variance
////---------functionlity::: variance of the elements in an array
////----------------------------------------------------
////----------------------------------------------------
var variance = function(array) {
    var mean_val = mean(array);
    return variance_helper(array, mean_val)/(array.length -1);
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: std
////---------functionlity::: standard div of the elements in an array
////----------------------------------------------------
////----------------------------------------------------
var std = function(array) {
    var mean_val = mean(array);
    return Math.pow(variance(array), .5)
}




//-----------------------------------------------------------------
//----------------iteration primitives
//-----------------------------------------------------------------

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: for_loop
////---------functionlity::: equivalent of for each but done on an object (context)
//---------------------------as opposed to an array
////----------------------------------------------------
////----------------------------------------------------
//k contains the body of the loop for one iteration
//context is an array containing the input. Note that each element contains the input 
//for one iteration
//counter: always set it to zero
//upper_bound: loop upper bound
var for_loop = function(k, context, counter, upper_bound) {
  if (counter == upper_bound - 1) {
     return [k(context, counter)];
  }else{
      var second_part  =  for_loop(k, context, counter + 1, upper_bound);
      var first_part = [k(context, counter)];
      return first_part.concat(second_part);
  }
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: for_each
////---------functionlity::: for_each
////----------------------------------------------------
////----------------------------------------------------
var for_each = function(k, array) {
  if (cdr(array).length == 0) {
     return [k(car(array))];
  }else{
      var second_part  =  for_each(k, cdr(array));
      var first_part = [k(car(array))]
      return first_part.concat(second_part);
  }
}



//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: for_loop_general
////---------functionlity::: general for loop
////----------------------------------------------------
////----------------------------------------------------
//----this function used when we we iterate through using the code counter but 
//--- not necessary over a sequentil container. In this scenario, the counter
//--- is mainly used as the number of times that the for loop is called, not 
//--- necessary the index of the array (or the sequential container) that we 
//----want to work on. K is the body of the loop and uses the container to
//----deals with various indeceis of the sequential container
var for_loop_general = function(k, context, counter, upper_bound) {
  if (counter == upper_bound - 1) {
     return k(context, counter);
  }else{
      return for_loop_general(k, k(context, counter), counter + 1, upper_bound);
  }
}


//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: for_one_helper 
//-----------cuntionality::: 
////----------------------------------------------------
////----------------------------------------------------
var for_one_helper = function(k, for_one_context, counter, upper_bound, index) {
  if (index >= upper_bound) {
    console.log("***index out of bound****");
    console.log("index is", index);  
    return false; //abort the program 
  }
  if (counter == upper_bound - 1) {
     var return_val = counter == index ? [k(for_one_context, counter)]: [for_one_context.array[counter]];
     return return_val;
  }else{
      var second_part  =  for_one_helper(k, for_one_context, counter + 1, upper_bound, index);
      var first_part = counter == index ? [k(for_one_context, counter)]: [for_one_context.array[counter]];
      return first_part.concat(second_part);
  }
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: for_one (as opposed to for_each)
//-----------cuntionality::: apply a function only to one element of an array
////----------------------------------------------------
////----------------------------------------------------
var for_one = function(k , for_one_context, index) {
    return for_one_helper (k, for_one_context, 0, for_one_context.array.length, index);
}


//-----------------------------------------------------------------
//------------------operators
//-----------------------------------------------------------------

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: multiply_round
//-----------cuntionality::: multiply,truncate then round
////----------------------------------------------------
////----------------------------------------------------
var multiply_round = function(a, b, num_of_bits) {
   var abs_a = Math.abs(a);
   var abs_b = Math.abs(b);
   var a_sign = (abs_a == a ? 1 : -1);
   var b_sign =  (abs_b == b ? 1 : -1);
   var calc_sign = a_sign * b_sign;
   var a_rounded = (abs_a >> (num_of_bits - 1)) == 1 ? (abs_a >> num_of_bits) + 1 : (abs_a >> num_of_bits)
   var b_rounded = (abs_b >> (num_of_bits - 1)) == 1 ? (abs_b >> num_of_bits) + 1 : (abs_b >> num_of_bits)
   return calc_sign * ((a_rounded * b_rounded) << (2*num_of_bits));
   return 1;
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: add_round
//-----------cuntionality::: add, truncate, then round
////----------------------------------------------------
////----------------------------------------------------
var add_round = function(a, b, Nia) {
    var weight = Math.pow(2, Nia) - 1;	
    var iap_a = weight&a;
	var a_op = (iap_a >> (Nia - 1)) == 1 ? (a >> Nia) + 1 : (a >> Nia);
    var iap_b = weight&b;
    var b_op = (iap_b >> (Nia - 1)) == 1 ? (b >> Nia) + 1 : (b >> Nia);
	return ((a_op) + (b_op)) << Nia;
}


//-----------------------------------------------------------------
//-------------- dct_webppl
//-----------------------------------------------------------------
var bt_array = [5, 1]; //sets the number of bits truncation on the instruction
var c1d4= 362;
var c1d8= 473;
var c3d8= 196;
var c1d16= 502;
var c3d16= 426;
var c5d16= 284;
var c7d16= 100;


//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: subtract_two_arrays
////---------functionlity::: subtracting two arrays element by element
////----------------------------------------------------
////----------------------------------------------------
var subtract_two_arrays = function(array1, array2) {
  if (cdr(array1).length == 0) {
     return [Math.abs(car(array1)- car(array2))];
  }else{
      var second_part  =  subtract_two_arrays(cdr(array1), cdr(array2));
      var first_part = [Math.abs(car(array1)- car(array2))];
      return first_part.concat(second_part);
  }
}


var convert_to_char = function(input, counter) {
    return input[counter].charCodeAt(0);
}

var assign_array = function(context) {
    return context.MSCALE_val;
}

var LS = function(r, s) {
    return ((r) << (s));
};

var RS = function(r, s) {
    return ((r) >> (s));       
};

var MSCALE = function(r) {
    return ((r) >> (9));       
};

var CLIP_helper = function(tmp)
{
    
   if (tmp< 0) {
       if((tmp-4)%8 ==0) {
           return Math.floor((tmp-4)/8);
       }else{
           return Math.floor((tmp-4)/8)+1;
       }
   }else{
     return Math.floor((tmp+4)/8);
   }
};

var CLIP = function(tval) {
   var tval = CLIP_helper(tval); 
   if (tval < -1023)
   {
     return -1023;
   }
   else if (tval > 1023)
   {
     return 1023;
   }else{
	 return tval;
   }
};

var dct_first_loop_body = function(context, i){
    if(context.dcten==false) return;
    
   /* 
    var v0 = (context.inqueue[i*8+0]).charCodeAt(0);
    var v1 = (context.inqueue[i*8+1]).charCodeAt(0);
    var v2 = (context.inqueue[i*8+2]).charCodeAt(0);
    var v3 = (context.inqueue[i*8+3]).charCodeAt(0);
    var v4 = (context.inqueue[i*8+4]).charCodeAt(0);
    var v5 = (context.inqueue[i*8+5]).charCodeAt(0);
    var v6 = (context.inqueue[i*8+6]).charCodeAt(0);
    var v7 = (context.inqueue[i*8+7]).charCodeAt(0);
 */   
    var v0 = (context.inqueue[i*8+0]);
    var v1 = (context.inqueue[i*8+1]);
    var v2 = (context.inqueue[i*8+2]);
    var v3 = (context.inqueue[i*8+3]);
    var v4 = (context.inqueue[i*8+4]);
    var v5 = (context.inqueue[i*8+5]);
    var v6 = (context.inqueue[i*8+6]);
    var v7 = (context.inqueue[i*8+7]);
   
    var a0 = LS((v0+ v7),  2);
    //cout<< "a0: "<< a0<<endl; 
    
    var c3 = LS((add_round(v0, (-1*v7), context.bt[0])),  2); 
    var a1 = LS((add_round(v1, v6, context.bt[1])),  2) ;
    var c2 = LS((v1 +  (-1*v6)),  2);
    var a2 = LS((v2 + v5),  2);
    var c1 = LS((v2 + (-1*v5)),  2);
    var a3 = LS((v3 + v4),  2); //AdditionOp 
    var c0 = LS((v3 + (-1*v4)),  2); 
    var b0 = a0 + a3;
    var b1 = a1 +  a2 ;
    var b2 = a1 + (-1*a2);
    var b3 = a0 + (-1*a3);
    var b0b1Add1 = b0 + b1; 
    
    
    var tmp_1 = for_one(assign_array, {array:context.tmp, MSCALE_val: MSCALE(c1d4 * (b0b1Add1))}, i);
    //tmp[i] = MSCALE(c1d4 * (b0b1Add1));//MultiplicationOp
    var b0b1Sub1 = b0 + (-1*b1); //AdditionOp
    var tmp_2 = for_one(assign_array, {array:tmp_1, MSCALE_val: MSCALE(c1d4 * (b0b1Sub1))}, i+32);
    
    //tmp[i + 32] = MSCALE(c1d4 * (b0b1Sub1)); //MultiplicationOp
   

    var c3d8b2Mul = c3d8 * b2;//MultiplicationOp
    var c1d8b3Mul = c1d8 *  b3;//MultiplicationOp
    var c3d8b3Mul = c3d8 *  b3;//MultiplicationOp
    var c1d8b2Mul = c1d8 * b2;//MultiplicationOp
    
    
    var tmp_3 = for_one(assign_array, {array:tmp_2, MSCALE_val:MSCALE(c3d8b2Mul+ c1d8b3Mul)}, i+16);
    var tmp_4 = for_one(assign_array, {array:tmp_3, MSCALE_val:MSCALE(c3d8b3Mul + (-1*c1d8b2Mul))}, i+48);
    //tmp[i + 16] = MSCALE(c3d8b2Mul+ c1d8b3Mul);//AdditionOp
    //tmp[i + 48] = MSCALE(c3d8b3Mul + (-1*c1d8b2Mul)); //AdditionOp
    
    var c2c1Temp =  c2 + (-1*c1); //AdditionOp
    var c2c1Temp2 =  c2 +  c1;//AdditionOp
    
    
    var b0_2 = MSCALE(c1d4 *c2c1Temp);//MultiplicationOp
    var b1_2 = MSCALE(c1d4 * (c2c1Temp2));
    var a0_2 = c0 + b0_2;
    var a1_2 = c0 - b0_2;
    var a2_2 = c3 - b1_2;
    var a3_2 = c3 + b1_2;
    var c7d16a0Mul =  c7d16 * a0_2;
    var c1d16a3Mul = c1d16 * a3_2;
    var c3d16a2Mul =  c3d16 * a2_2;
    var c5d16a1Mul =  c5d16 * a1_2;
    var c5d16a2Mul =  c5d16 * a2_2;
    var c3d16a1Mul =  c3d16 * a1_2;
    var c7d16a3Mul =  c7d16 * a3_2;
    var c1d16a0Mul =  c1d16 * a0_2;
    
    var tmp_5 = for_one(assign_array, {array:tmp_4, MSCALE_val:MSCALE((c7d16a0Mul) + (c1d16a3Mul))}, i+8);
    var tmp_6 = for_one(assign_array, {array:tmp_5, MSCALE_val:MSCALE((c3d16a2Mul) - (c5d16a1Mul))}, i+24);
    var tmp_7 = for_one(assign_array, {array:tmp_6, MSCALE_val:MSCALE((c3d16a1Mul) + (c5d16a2Mul))}, i+40);
    var tmp_8 = for_one(assign_array, {array:tmp_7, MSCALE_val:MSCALE((c7d16a3Mul) - (c1d16a0Mul))}, i+56);
    
    //tmp[i + 8] = MSCALE((c7d16a0Mul) + (c1d16a3Mul));
    //tmp[i + 24] = MSCALE((c3d16a2Mul) - (c5d16a1Mul));
    //tmp[i + 40] = MSCALE((c3d16a1Mul) + (c5d16a2Mul));
    //tmp[i + 56] = MSCALE((c7d16a3Mul) - (c1d16a0Mul));
    return {inqueue:context.inqueue, dcten: context.dcten, qen: context.qen, tmp:tmp_8, bt:context.bt};
}

var dct_second_loop_body = function(context, i) {

	//#pragma HLS PIPELINE
    //aptr = LS(i,  3);
    var v0 = context.tmp[i*8+0];// aptr++;
    var v1 = context.tmp[i*8+1]; //aptr++;
    var v2 = context.tmp[i*8+2]; //aptr++;
    var v3 = context.tmp[i*8+3]; //aptr++;
    var v4 = context.tmp[i*8+4];// aptr++;
    var v5 = context.tmp[i*8+5]; //aptr++;
    var v6 = context.tmp[i*8+6]; //aptr++;
    var v7 = context.tmp[i*8+7];
    var c3 = RS((v0 + (-1*v7)),  1);  //AdditionOp
    var a0 = RS((v0 +  v7),  1);//AdditionOp
    var c2 = RS((v1 + (-1*v6)),  1); //AdditionOp
    var a1 = RS((v1 +  v6),  1);//AdditionOp
    var  c1 = RS((v2 + (-1*v5)),  1); //AdditionOp
    var a2 = RS((v2 +  v5),  1);//AdditionOp
    var c0 = RS((v3 + (-1*v4)),  1); //AdditionOp
    var a3 = RS((v3 + v4),  1);//AdditionOp
    var b0 = a0 + a3;//AdditionOp 
    var b1 = a1 + a2;//AdditionOp
    var b2 = a1 + (-1*a2);//AdditionOp
    var b3 = a0 + (-1* a3);//AdditionOp
    var c1c2Sub = c2 + (-1*c1); //AdditionOp
    var c1c2Add= c2 + c1; //AdditionOp
    var tb0 = MSCALE(c1d4 *  (c1c2Sub)); //MultiplicationOp
    var tb1 = MSCALE(c1d4 * (c1c2Add)); //MultiplicationOp
    var ta0 = c0 + tb0; //AdditionOp
    var ta1 = c0 + (-1*tb0); //AdditionOp
    var  ta2 = c3 + (-1*tb1); //AdditionOp
    var ta3 = c3 +  tb1; //AdditionOp

    var b0b1Add = b0 +  b1;  //AdditionOp
    var b0b1Sub = b0 + (-1*b1); //AdditionOp 
    var c3d8b2Mul = c3d8 * b2;//MultiplicationOp
    var c1d8b3Mul = c1d8 *  b3;//MultiplicationOp
    var c3d8b3Mul = c3d8 *  b3;//MultiplicationOp
    var c1d8b2Mul = c1d8 * b2;//MultiplicationOp
    
    var outqueue_0 = for_one(assign_array, {array:context.outqueue, MSCALE_val:CLIP(MSCALE(c1d4 * (b0b1Add)))}, i*8);
    var outqueue_1 = for_one(assign_array, {array:outqueue_0, MSCALE_val:CLIP(MSCALE(c1d4 * (b0b1Sub)))}, i*8+4);
    var outqueue_2 = for_one(assign_array, {array:outqueue_1, MSCALE_val:CLIP(MSCALE((c3d8b2Mul) + (c1d8b3Mul)))}, i*8+2);
    
    var outqueue_3 = for_one(assign_array, {array:outqueue_2, MSCALE_val:CLIP(MSCALE((c3d8b3Mul) - (c1d8b2Mul)))}, i*8+6);
    var outqueue_4 = for_one(assign_array, {array:outqueue_3,  MSCALE_val:CLIP(MSCALE((c7d16 * ta0) + (c1d16 * ta3)))}, i*8+1);
    var outqueue_5 = for_one(assign_array, {array:outqueue_4, MSCALE_val:CLIP(MSCALE((c3d16 * ta2) - (c5d16 * ta1)))}, i*8+3);
    
    
    var outqueue_6 = for_one(assign_array, {array:outqueue_5, MSCALE_val:CLIP(MSCALE((c3d16 * ta1) + (c5d16 * ta2)))}, i*8+5);
    var outqueue_7 = for_one(assign_array, {array:outqueue_6, MSCALE_val:CLIP(MSCALE((c7d16 * ta3) - (c1d16 * ta0)))}, i*8+7);
    return {tmp: context.tmp, outqueue: outqueue_7};
//    outqueue[i*8] 		=CLIP(MSCALE(c1d4 * (b0b1Add)));
//    outqueue[i*8 + 4] =CLIP(MSCALE(c1d4 * (b0b1Sub)));
//    outqueue[i*8 + 2] =CLIP(MSCALE((c3d8b2Mul) + (c1d8b3Mul)));
//    outqueue[i*8 + 6] =CLIP(MSCALE((c3d8b3Mul) - (c1d8b2Mul)));
//    outqueue[i*8 + 1] =CLIP(MSCALE((c7d16 * ta0) + (c1d16 * ta3)));
//    outqueue[i*8 + 3] =CLIP(MSCALE((c3d16 * ta2) - (c5d16 * ta1)));
//    outqueue[i*8 + 5] =CLIP(MSCALE((c3d16 * ta1) + (c5d16 * ta2)));
//    outqueue[i*8 + 7] =CLIP(MSCALE((c7d16 * ta3) - (c1d16 * ta0)));
}



var dct = function(inqueue, dcten, qen, tmp, bt, outqueue) {
    var first_loop_context = {inqueue:inqueue, dcten: dcten, qen: qen, tmp:tmp, bt: bt};
    var dct_first_loop_result = for_loop_general(dct_first_loop_body, first_loop_context, 0, 8);
    var second_loop_context = {tmp:dct_first_loop_result.tmp, outqueue:outqueue}
    var dct_second_loop_result = for_loop_general(dct_second_loop_body, second_loop_context, 0, 8);
    return dct_second_loop_result.outqueue;
}

//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: get_one_sample_from_dct
////---------functionlity::: generate one input sample, and calculate the 
//-------------------------  accurate and inaccurate dct. Inaccuracy amount
//------------------------   is determined by bt_array. This function returns
//------------------------   SNR for one sample
////----------------------------------------------------
////----------------------------------------------------
var get_one_sample_from_dct = function(){
    var file_lines = get_file_lines('dct_in_golden.txt');
    var get_inqueue_from_file = 0;
    var inqueue =  get_inqueue_from_file == 1 ? for_loop(convert_to_char, 
            file_lines[0].split(""), 0, 64) :  
        for_loop(function() {return randomInteger(255)}, [] , 0, 64);

    var tmp = for_loop(function() {return 1}, [] , 0, 64); //intitalize tmp array with 1
                                              //in it (doesn't matter 
                                              //what it is initialized with
    var outqueue = for_loop(function() {return 1}, [] , 0, 64);  //initialized outqueue 
                                                    //with 1 (doesn't matter
                                                    //what the number is)
    var qen = true;
    var dcten = qen;
    var bt_no_error = [0, 0];
    
    var accurate = dct(inqueue, dcten, qen, tmp, bt_no_error, outqueue);
    var inaccurate = dct(inqueue, dcten, qen, tmp, bt_array, outqueue);
    var error = subtract_two_arrays(accurate, inaccurate)
    return std(error)/std(accurate) 
    //return mean(error);
}


//--- main 
//----------------------------------------------------
////----------------------------------------------------
////---------module_name::: main
////---------functionlity::: 
////----------------------------------------------------
////----------------------------------------------------
var main = function() {
    var snr_results = repeat(10, get_one_sample_from_dct);
    console.log("mean of snr", mean(snr_results)); 
    console.log("std of snr", std(snr_results)); 
}


/*
//writing the inqueue of a string char by char
var fs = require.call(null, 'fs');
fs.unlink('out_blah.txt');
var write_char_to_file = function(in_char) {
    var fs = require.call(null, 'fs');
    var fileContents = fs.appendFile('out_blah.txt',in_char, 'utf8');
}
*/


main();

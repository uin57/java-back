
///<summary>精确计算加法。语法：Math.add(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Math.add = function(v1, v2)
{
  var r1, r2, m;
  try
  { 
    r1 = v1.toString().split(".")[1].length;
  }
  catch (e)
  {
    r1 = 0;
  }
  try
  {
    r2 = v2.toString().split(".")[1].length;
  }
  catch (e)
  {
    r2 = 0;
  }
  var maxLen = Math.max(r1, r2);
  m = Math.pow(10,maxLen);
  
  return parseFloat(((v1 * m + v2 * m) / m).toFixed(maxLen));
}


///<summary>精确计算加法。语法：number1.add(v)</summary>
///<param name="v" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Number.prototype.add = function(v)
{
  return Math.add(v, this);
}


///<summary>精确计算减法。语法：Math.sub(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Math.sub = function(v1, v2)
{
  return Math.add(v1, -v2);
}


///<summary>精确计算减法。语法：number1.sub(v)</summary>
///<param name="v" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Number.prototype.sub = function(v)
{
  return Math.sub(this, v);
}


///<summary>精确计算乘法。语法：Math.mul(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Math.mul = function(v1, v2)
{
  var m = 0;
  var s1 = v1.toString();
  var s2 = v2.toString();
  try
  {
    m += s1.split(".")[1].length;
  }
  catch (e)
  {
  }
  try
  {
    m += s2.split(".")[1].length;
  }
  catch (e)
  {
  }
  
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
//  var n = Number(s1.replace(".", "")) * Number(s2.replace(".", "")).toString()+"";
//  var rel;
//  if(m>0){
//	  rel = n.substr(0,m)+"."+n.substring(m);
//  } else {
//	  rel = n;
//  }
//  return parseFloat(rel);
}


///<summary>精确计算乘法。语法：number1.mul(v)</summary>
///<param name="v" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Number.prototype.mul = function(v)
{
  return Math.mul(v, this);
}


///<summary>精确计算除法。语法：Math.div(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Math.div = function(v1, v2)
{
  var t1 = 0;
  var t2 = 0;
  var r1, r2;
  try
  {
    t1 = v1.toString().split(".")[1].length;
  }
  catch (e)
  {
  }
  try
  {
    t2 = v2.toString().split(".")[1].length;
  }
  catch (e)
  {
  }

  with (Math)
  {
    r1 = Number(v1.toString().replace(".", ""));
    r2 = Number(v2.toString().replace(".", ""));
    return (r1 / r2) * pow(10, t2 - t1);
  }
}


///<summary>精确计算除法。语法：number1.div(v)</summary>
///<param name="v" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
Number.prototype.div = function(v)
{
  return Math.div(this, v);
}
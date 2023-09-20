clock();
// list of colors
col=['Red','Blue','White','yellow','green','cyan',"brown"];

//randomly assigning color to main grid items
function shuffle(){
var gitem = document.querySelectorAll('.item');
var garray=[];

function gcolor(){
    console.log(gitem.length);
    for(let i=0;i<gitem.length;++i){
        let a= Math.random()*col.length;
        let j=Math.floor(a);
        gitem[i].style.backgroundColor = col[j];
        garray.push(col[j]);
    }
    document.getElementById("empty").style.backgroundColor= "rgb(149, 202, 153)";
}
//calling function to add color 
gcolor();
tcolor();

//assignning colors to target grid
function tcolor(){
    var tarray=subset(garray,16);

    //subset of main grid
    function subset(arr,n){
        var res=new Array(n);
        var len=arr.length;
        var taken = new Array(len);
        while(n--){
          var x=Math.floor(Math.random()*len);
          res[n]=arr[x in taken? taken[x]:x];
          taken[x]= --len in taken? taken[len]:len;}
        return res;
      }
    var titem= document.querySelectorAll('.box');
        for(let i=0;i<titem.length;++i){
            titem[i].style.backgroundColor = tarray[i];
        }
    }
}
shuffle();

var ob2=document.getElementById('empty');
addEventListener('click',function(ob1){
    var ob=ob1.target;
    var a=ob.id;
    ob1=document.getElementById(a);
    
    //function to find out row and col of clicked pieces
    
    function rc(){
    
        var boxes=document.getElementsByClassName('box');
        var tar=document.querySelectorAll('.it');
        
        let grid=[[tar[0],tar[1],tar[2],tar[3],tar[4],tar[5]],
                    [tar[6],tar[7],tar[8],tar[9],tar[10],tar[11]],
                    [tar[12],tar[13],tar[14],tar[15],tar[16],tar[17]],
                    [tar[18],tar[19],tar[20],tar[21],tar[22],tar[23]],
                    [tar[24],tar[25],tar[26],tar[27],tar[28],tar[29]],
                    [tar[30],tar[31],tar[32],tar[33],tar[34],tar[35]]
                ]

                for(let i=0;i<6;++i){
                    for(let j=0;j<6;++j){
                        if(grid[i][j]===ob1){
                            x= [i , j ];}
                        }   
                }       
                
                var chk=ob2;
                for(let i=0;i<6;++i){
                    for(let j=0;j<6;++j){
                        if(grid[i][j]===chk){
                        y= [i , j ];} 
                    }
                }
            }

var coln= rc();
var row = x[0]+1;
var col = x[1]+1;
var erow = y[0]+1;
var ecol = y[1]+1;

adjacent();

//chking if clicked piece is adjacent to empty or not 
function adjacent(){
    if((row===erow && (col===ecol+1 || col===ecol-1)) || (col===ecol && (row===erow+1 || row===erow-1)) ){
        swap(ob1,ob2);
    }
}

//swapping the pieces
function swap(ob1,ob2){

    var temp=ob1.style.backgroundColor;
    console.log("temp color: ",ob1.style.backgroundColor);
    console.log(ob2.style.backgroundColor);
    ob1.style.backgroundColor=ob2.style.backgroundColor;
    ob2.style.backgroundColor=temp;

    document.getElementById('swap').play();
    iscomplete();
    }
    //Updating ob2(empty block)
    var blocks=document.getElementsByClassName("it");
    Array.from(blocks).forEach(function(e){
        //console.log(e.style.backgroundColor);
        if(e.style.backgroundColor=="rgb(149, 202, 153)"){
            ob2=e;
        }
    });
    console.log("after swap ob2: ",ob2);
});

//Count up timer in Seconds
function clock(){
    mytimer= setInterval(myclock,1000);
    var c=0;
    function myclock(){
        ++c;    
        sec.innerHTML=pad(c);
        function pad(val){
            var valstr= val+"";
            if(valstr.length<2){
                return "Time: 0"+valstr;
            }
            else{
                return "Time: "+valstr;
            }
        }
    }
    timeTaken=c;
}

//chk if it match the target
let moves=0;
function iscomplete(){
    var boxes=document.getElementsByClassName('box');
    var tar=document.querySelectorAll('.it');
    moves++;
  
    document.querySelector('.move').textContent='Move: '+moves;
    if( boxes[0].style.backgroundColor===tar[7].style.backgroundColor &&
        boxes[1].style.backgroundColor===tar[8].style.backgroundColor &&
        boxes[2].style.backgroundColor===tar[9].style.backgroundColor &&
        boxes[3].style.backgroundColor===tar[10].style.backgroundColor &&
        boxes[4].style.backgroundColor===tar[13].style.backgroundColor &&
        boxes[5].style.backgroundColor===tar[14].style.backgroundColor &&
        boxes[6].style.backgroundColor===tar[15].style.backgroundColor &&
        boxes[7].style.backgroundColor===tar[16].style.backgroundColor &&
        boxes[8].style.backgroundColor===tar[19].style.backgroundColor &&
        boxes[9].style.backgroundColor===tar[20].style.backgroundColor &&
        boxes[10].style.backgroundColor===tar[21].style.backgroundColor &&
        boxes[11].style.backgroundColor===tar[22].style.backgroundColor &&
        boxes[12].style.backgroundColor===tar[25].style.backgroundColor &&
        boxes[13].style.backgroundColor===tar[26].style.backgroundColor &&
        boxes[14].style.backgroundColor===tar[27].style.backgroundColor &&
        boxes[15].style.backgroundColor===tar[28].style.backgroundColor )
        {
            var score= Math.round(10000/(moves+timeTaken));
            //declare victory
            document.getElementById('victory').play();
            document.getElementById('overlay').style.display="block";
            document.getElementById('score').textContent += score;
            var hs=localStorage.getItem("HardHighScore");
            if(hs==null || hs<=score){
                hs=score;
            }
            localStorage.setItem("HardHighScore",hs);
            document.getElementById('highsc').textContent += hs;
            clearInterval(mytimer);
        }
}

function myFunction(){
    //addEventListener("click",function(){});  function ở đây gọi là callback function
    // document.getElementById("btnGo").addEventListener("click",function(){
    //     console.log("asd");
    // });
    var listNum=[];
    var footer=document.getElementById("footer");
    document.getElementById("btnGo").addEventListener("click",function(event){
        event.preventDefault();
        listNum.push(parseFloat(document.getElementById("txtNum").value));
        document.getElementById("txtNum").value="";
        console.log(listNum);
    });

    document.getElementById("btnCal").addEventListener("click",function(event){
        event.preventDefault();
        if(listNum.length){
            var sum=0;
            listNum.forEach(element => {
                if(element>0){
                    sum+=element;
                }
            });
            footer.innerHTML=sum;
            return;
        }
        alert("gimme a number");
    });

    document.getElementById("demSoDuong").addEventListener("click",function(event){
        event.preventDefault();
        if(listNum.length){
            var count=0;
            listNum.forEach(element => {
                if(element>0){
                    count++;
                }
            });
            footer.innerHTML=count;
            return;
        }
        alert("gimme a number");
    });

    document.getElementById("getMinInArr").addEventListener("click",function(event){
        event.preventDefault();
        if(listNum.length){
            var min=listNum[0];
            listNum.forEach(element => {
                if(element<min){
                    min=element;
                }
            });
            footer.innerHTML=min;
            return;
        }
        alert("gimme a number");
    });

    document.getElementById("getMinInArr2").addEventListener("click",function(event){
        event.preventDefault();
        if(listNum.length){
            var min=999999999;
            listNum.forEach(element => {
                if(element>0 && element<min){
                    min=element;
                }
            });
            footer.innerHTML=min;
            return;
        }
        alert("gimme a number");
    });

    document.getElementById("soChanCuoiCung").addEventListener("click",function(event){
        event.preventDefault();
        if(listNum.length){
            var res;
            var flag=0;
            listNum.forEach(element => {
                if(element%2==0){
                    res=element;
                    flag=1;
                }
            });
            if(flag==1){
                footer.innerHTML=res;
            }else{
                footer.innerHTML=-1;
            }
            return;
        }
        alert("gimme a number");
    });

    document.getElementById("doiCho").addEventListener("click",function(event){
        event.preventDefault();
        if(listNum.length){
            var i=prompt("Vi tri thu nhat");
            var j=prompt("Vi tri thu hai");
            if(i>=0&&j>=0&&i<listNum.length&&j<listNum.length){
                var t=listNum[i];
                listNum[i]=listNum[j];
                listNum[j]=t;
            }
            else{
                console.log("Nhập sai")
            }
            footer.innerHTML=listNum;
            return;
        }
        alert("gimme a number");
    });

    document.getElementById("sort").addEventListener("click",function(event){
        event.preventDefault();
        if(listNum.length){
            for(let i=0;i<listNum.length-1;i++){
                for(let j=i+1;j<listNum.length;j++){
                    if(listNum[i]>listNum[j]){
                        var t=listNum[i];
                        listNum[i]=listNum[j];
                        listNum[j]=t;
                    }
                }
            }
            footer.innerHTML=listNum;
            return;
        }
        alert("gimme a number");
    });

    document.getElementById("print").addEventListener("click",function(event){
        if(listNum.length){
            event.preventDefault();
            footer.innerHTML=listNum;
            return;
        }
        alert("gimme a number");
    })

    // document.getElementById("getValue").onclick=function(event){
    //     event.preventDefault();
    //     // var number=document.getElementsByTagName("input")[0].value  ;
    //     // console.log(number);
    //     // console.log(document.getElementsByClassName("form-control")[0].value);
    //     // var number=document.querySelector(".form-control");
    //     // console.log(number.value);

    //     var number=document.querySelectorAll(".form-control");
    //     console.log(number[1].value);
    // }
}
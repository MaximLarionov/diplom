"use strict";

const btn = document.querySelector(".btn");

btn.addEventListener("click", checkCode);
/*
const separators = [
    "==",
    "=",
];*/

function checkCode(){
    let code = document.querySelector("textarea").value.split("\n");


    code = deleteSpaces(code);

    console.log(code)
}




function deleteSpaces(code){
    console.log(code)


    for (let i = 0; i < code.length; i++) {

        let string = code[i].replaceAll(" ", "");
        string = string.length

        if(string === 0){
            code.splice(i, 1);
        }
    }/*


    for (let i = 0; i < code.length; i++) {
        let flag = false;

        while (!flag){
            flag = true;
            let start = true;
            for (let j = 0; j < code[i].length; j++){
                if(code[i][j] !== " "){
                    if(start){
                        start = false;
                    }
                }else if(!start){
                    code[i] = code[i].slice(0, j) + code[i].slice(j + 1);
                    flag = false;
                    break;
                }
            }
        }
    }*/

    return code;
}
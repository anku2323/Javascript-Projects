let num = document.getElementById("number").innerText;
        num = parseInt(num) 

        function inc() {
            num += 1
            upd()
        }

        function dec() {
            if (num>0){
                num-=1
            }
            upd()
        }

        function cl() {
            num = 0
            upd()
        }

        function upd(){
        let buttonElement = document.getElementById("number");
        buttonElement.innerText = num;
        }
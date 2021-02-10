const input = $("input");

$(".num__key").each(function(e){
    //console.log($( this ).text())
    $(this).click(function(){
        //console.log($(this).text())
        // if(input.val() !== "0"){
        //     input.val() += this.text();
        // }else{
        //     input.append(this.text())
        // }
        if(input.val() == "0"){
            console.log(input.val())
        }else{
            console.log("error")
        }
    })
})
/*let benzin =2.1;
let dıesel=2.3;
let gas=1.8;

const neWLine="\r\n";
const fuels="1 benzın "+neWLine+"2 diesel"+neWLine+"3 gas"
let listele=prompt(fuels);
let miktaari=prompt("kac litre");
let para=prompt("kac tlniz var!");

function calculate(secenek,para,litre){
    let yakıtTutarı=secenek*litre
    let bakiye=para-yakıtTutarı;
    if(para>=yakıtTutarı){
    alert("islem basarili bakiyeniz: "+bakiye);
    }else{
    alert("bakiyeniz yeterli degil!!!");
    }

}
if(listele==1){
    calculate(benzin,para,miktaari);
}else if(listele==2){
    calculate(dıesel,para,miktaari);
}else if(listele==3){
    calculate(gas,para,miktaari);

}else{
    alert("giris yanlıs!!");
}*/
/*let matDogru,matYanlıs=0;
let fenDogru,fenYanlıs=0;
let turkceDogru,turkceYanlıs=0;
let ortalama=0;
let okulPuanı=0;
let tabanPuan=0;
let yenıSatır="\r\n";
let mesaj="not hesaplamak icin 1 e basın!"+yenıSatır
+"cıkıs yapmak icin 2 ye basın!";
let secim=prompt(mesaj);
switch (secim) {
    case "1":
        matDogru=Number(prompt("Mateatik dogruları"));
        matYanlıs=Number(prompt("matematik yanlısları"));
        fenDogru=Number(prompt("fen dogruları"));
        fenYanlıs=Number(prompt("fen yanlısları"));
        turkceDogru=Number(prompt("turkce dogruları"));
        turkceYanlıs=Number(prompt("turkce yanlısları"));
        tabanPuan=Number(prompt("taban puanınınz"));
        tabanPuan=Number(prompt("okul puanınız"));
        ortalama=((((matDogru+fenDogru+turkceDogru)-((matYanlıs+fenYanlıs+turkceYanlıs)/4)))*4+tabanPuan+okulPuanı);
        alert(ortalama);
        break;

    default:
        break;
}*/
let sonuc=0;
for (let i = 50; i > 0; i--) {
    
    sonuc+=i;
    
    console.log(i);
}
console.log(sonuc);
let sayi=Number(prompt("sayi girirniz"));
let sonuc=1;

for (let i = 1; i < sayi; i--) {
    
    sonuc*=i;
}
alert(sayi+ " sayisinin faktoriyeli: " + sonuc);
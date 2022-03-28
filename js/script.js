// 객체란
var galaxy = new Object(); // galaxy라는 변수에 새로운 객체를 생성
galaxy.inches="6inches";
galaxy.ram_spact="16G";

document.write(galaxy.inches, "<br>");
document.write(galaxy.ram_spact, "<br>");

// 게임 캐릭터를 구성하기
var $hero={
    $name : "토마토 재배자",
    $level : 1,
    $device : "곡갱이",
    $cloth : "일반 가죽옷",
    $hp : 100,
    $ep : 0,
}
document.write("나의 게임 캐릭터 이름은 "+$hero.$name+" 입니다.", "<br>");
document.write("현재 나의 레벨은 "+$hero.$level+" 입니다.", "<br>");

document.write("1단계의 끝판왕을 물리쳤습니다.", "<br>");
$hero.$level++;
document.write("현재 나의 레벨은 "+$hero.$level+" 입니다.", "<br>");
console.log($hero);
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

// 날짜 객체
var $today=new Date(); // 컴퓨터의 시스템으로부터 날짜 정보를 받아오겠다는 선언 Date() : 새로운 현재 정보를 가져오겠다는 선언, Date(연월일) : 그 날짜에 해당하는 정보를 가져옴
console.log($today); // 연월일(요일)시분초...
var $cur_year=$today.getFullYear(); // $cur_year : curent year
document.write($cur_year+"년 ");

var $cur_month=$today.getMonth()+1; // 1월의 데이터 : 0, 2월의 데이터 : 1, ... 12월의 데이터 : 11 => 즉 해당 월의 정보를 얻고싶다면 +1을 해줘야한다
document.write($cur_month+"월 ");

var $cur_date=$today.getDate();
document.write($cur_date+"일 ");

var $cur_day=$today.getDay(); // 일요일 : 0, 월요일 : 1, ... 토요일 : 6
if($cur_day==0){
    document.write("일요일 ");    
}else if($cur_day==1){
    document.write("월요일 ");
}else if($cur_day==2){
    document.write("화요일 ");
}else if($cur_day==3){
    document.write("수요일 ");
}else if($cur_day==4){
    document.write("목요일 ");
}else if($cur_day==5){
    document.write("금요일 ");
}else{
    document.write("토요일 ");
}

var $cur_hours=$today.getHours();
if($cur_hours>=12){ // 12시라는 기준을 넘었을 때
    if($cur_hours<13){
        document.write("오후"+$cur_hours+"시 ");    
    }else{
        document.write("오후"+($cur_hours-12)+"시 ");
    }
}else{ // 0시~11시
    document.write("오전"+$cur_hours+"시 ");
}

var $cur_minutes=$today.getMinutes();
document.write($cur_minutes+"분 ");

var $cur_seconds=$today.getSeconds();
document.write($cur_seconds+"초 ");

var $cur_Millisec=$today.getMilliseconds();
document.write($cur_Millisec+"초 "); // 소수점 이하의 시간 정보를 받아옴

var $cur_getTime=$today.getTime();
document.write("1970년 1월 1일으로부터 경과된 시간 정보(초단위) : "+$cur_getTime+"<br>");
// 로그인 상태를 유지하는 시간

// 본인의 생일을 기준으로 요일 찾기
var $birth=new Date(1995, 04, 08);
var $birth_day=$birth.getDay();
document.write("내가 태어난 요일은 : "+$birth_day+"<br>");

// 계절별 이미지 표현
if($cur_month>=3&&$cur_month<=5){
    document.write("<img src='img/img-m.jpg'>");
}else if($cur_month>=6&&$cur_month<=8){
    document.write("<img src='img/img-s.jpg'>");
}else if($cur_month>=9&&$cur_month<=11){
    document.write("<img src='img/img-f.jpg'>");
}else{
    document.write("<img src='img/img-w.jpg'>");
}
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

// 수학객체
document.write("<h3>수학객체 : 숫자형 데이터로부터 적용할 수 없는 복잡한 형태의 수학결과물을 도출시 사용</h3>");
var $num_max=Math.max(27,36,5,76);
document.write("가장 큰 수를 반환 : "+$num_max+"<br>");
var $num_min=Math.min(27,36,5,76);
document.write("가장 작은 수를 반환 : "+$num_min+"<br>");

var $num=1234.5678;
var $round=Math.round($num);
document.write("소숫점 첫째 자리에서 반올림 한 값(정수) : "+$round+"<br>");
var $ceil=Math.ceil($num);
document.write("소숫점 첫째 자리에서 무조건 올림 한 값(정수) : "+$ceil+"<br>");
var $floor=Math.floor($num);
document.write("소숫점 첫째 자리에서 무조건 내림 한 값(정수) : "+$floor+"<br>");
var $random=Math.random();
document.write("0~1 사이의 난수를 반환 : "+$random+"<br>");

// 1~10 사이의 값을 랜덤 방식으로 반환(정수값)
var $int_01=Math.ceil(Math.random()*10);
/* 
    최소값 : 0.001 => 0.01 => 1(올림적용)
    최대값 : 0.999 => 9.99 => 10(올림적용)
*/
document.write("1~10 사이의 정수값을 랜덤 방식 적용 "+$int_01+"<br>");

var $int_02=Math.floor(Math.random()*10)+1;
/* 
    최소값 : 0.001 => 0.01 => 0(내림적용) => 1(+1)
    최대값 : 0.999 => 9.99 => 9(내림적용) => 10(+1)
*/
document.write("1~10 사이의 정수값을 랜덤 방식 적용 "+$int_02+"<br>");

// 실습 1~25 사이의 값을 랜덤 방식으로 반환
var $int_03=Math.ceil(Math.random()*25);
/* 
    최소값 : 0.001 => 0.025 => 1(올림적용)
    최대값 : 0.999 => 24.75 => 25(올림적용)
*/
document.write("1~25 사이의 정수값을 랜덤 방식 적용 "+$int_03+"<br>");

// 11~100 사이의 값을 랜덤 방식으로 반환(정수값)
var $int_04=Math.ceil(Math.random()*90)+10;
/* 
    최소값 : 0.001 => 0.09 => 1(올림적용) => 11(+10)
    최대값 : 0.999 => 89.91 => 90(올림적용) => 100(+10)
*/
document.write("11~100 사이의 정수값을 랜덤 방식 적용 "+$int_04+"<br>");

// 스타크래프트의 종족 선택시 랜덤방식
var $rand = Math.random(); // 명령을 하는 random의 경우는 기능으로 소괄호가 뒤에 붙는다
if($rand>0&&$rand<=0.333333333){
    document.write("<img src='img/protoss.gif' alt='프로토스'>");
}else if($rand>0.333333333&&$rand<=0.666666666){
    document.write("<img src='img/terran.gif' alt='태린'>");
}else{
    document.write("<img src='img/zerg.gif' alt='저그'>");
}

var $pi=Math.PI; // 고정값을 갖고 있는 PI의 경우는 속성으로 소괄호가 뒤에 붙지 않는다
console.log($pi);

// 문자 객체
document.write("<h3>문자 객체 : 문자 객체의 정보를 반환 + 문자 객체의 조작</h3>");
var $str="Thank you hello nice to meet you";
var $charAt=$str.charAt(2);
// 좌측으로부터 인덱스 번호가 2인 문자를 반환
console.log($charAt); // a
var $indexOf=$str.indexOf("you");
// 좌측으로부터 찾는 문자의 최초로 일치하는 인덱스 번호를 반환
console.log($indexOf); // 6
var $indexOf_cf=$str.indexOf("you", 10);
// 인덱스 번호 10 이하의 문자를 제외하고 그 이후에 나오는 문자의 인덱스 번호를 반환
console.log($indexOf_cf); // 29
var $match=$str.match("nice");
console.log($match); // ["nice", index: 16, input: "Thank you hello nice to meet you", groups: undefined]
// 웹서비스 상에서 구매자와 판매자의 연결을 할 수 있는 도구의 특정적인 단어를 찾고자 할 때 사용(이메일의 경우 @ 표기를 찾는다.)
console.log($match[0]=="nice"); // true

var $match_null=$str.match("good");
console.log($match_null); // null

var $replace_str=$str.replace("hello", "hi");
// replace("바꿀 문자", "새문자") : 교체
// replace("바꿀 문자", "") : 기존 문자 삭제
console.log($replace_str);

var $slice=$str.slice(10, 15); // 서수; 11,12,13,14,15
// 10번째 이후 문자부터 15번째 이후 문자를 자르고 반환
console.log($slice); // hello

var $substring=$str.substring(6, 9); // 인덱스; 6,7,8
// 인덱스 번호 6번 문자부터 인덱스 번호 9번 포함 이후 문자를 자르고 반환
console.log($substring); // you

var $substr=$str.substr(6, 3); // 6,7,8
// 인덱스 번호 6번 문자부터 3개의 문자를 자르고 반환
console.log($substr); // you

var $str_length=$str.length; // 문자열에서 전체 개수를 반환(개수=마지막 인덱스번호+1)
console.log($str_length+"개");

var $hash="#kids_0";
var $arr_hash=$hash.split("_"); // 지정한 문자를 기준으로 각 문자들을 배열 데이터로 따로 저장
console.log($arr_hash); // ["#kids", "0"]

var $phone="01012345678";
var $ch_phone=$phone.substr(0, 7)+"****";
document.write($ch_phone+"<br>"); // 0101234****

// 010 12345678, 010/1234/5678, +821012345678
var $phone_01="010-1234-5678"; // 010-1234-****
var $ch_phone_01=$phone_01.substr(0, $phone_01.length-4)+"****";
document.write($ch_phone_01+"<br>");

var $op_phone="010-4679-1234";
var $ch_op_phone=$op_phone.replace("-", "");
console.log($ch_op_phone); // 0104679-1234
var $final_op_phone=$ch_op_phone.replace("-", "");
console.log($final_op_phone); // 01046791234

// <a href="tel:01012345678">전화걸기</a>
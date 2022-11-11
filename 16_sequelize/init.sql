-- #######################################################################3
-- cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
-- $ winpty mysql -u root -p
-- 1234

-- 데이터베이스 목록보기
SHOW DATABASES;

-- 데이터베이스 생성
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 데이버베이스 선택 (사용)
USE kdt;
SHOW TABLES;

-- 방명록(visitor) 테이블 생성
CREATE TABLE visitor (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

-- 테이블 구조 확인
DESC visitor;


-- 방명록(visitor) 테이블 데이터 추가
INSERT INTO visitor (name, comment) VALUES ('홍길동', '내가 왔다.');
INSERT INTO visitor (name, comment) VALUES ('이찬혁', '으라차차');
INSERT INTO visitor (name, comment) VALUES ('이수현', '가가가');
INSERT INTO visitor (name, comment) VALUES ('아이유', '하하하');

-- 방명록(visitor) 테이블 정보 확인
SELECT * FROM visitor;

-- DCL
-- mysql 사용자 추가 (user계정)
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- user 계정에 db 권한 (모든 db에 접근 가능 설정)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 mysql 캐시 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';


UPDATE visitor SET name = '김예나' WHERE id = 3;

DELETE FROM visitor WHERE id = '3';

SELECT * FROM visitor WHERE id = 1; -- one


-- 테이블 데이터 수정 (update)
UPDATE visitor SET name = '누구', comment = '아무말' WHERE id =1 ;

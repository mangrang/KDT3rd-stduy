const mysql = require('mysql');

// DB 연결 정보
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
});

exports.getVisitors = (callback) => {
  // before
  // return [
  //   { id: 1, name: '홍길동', comment: '내가 왔다.' },
  //   { id: 2, name: '이찬혁', comment: '으라차차' },
  // ];

  // after - mysql 연결
  // query(SQL, callback)
  conn.query('SELECT * FROM visitor', (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js', rows); // [ {}, {}, {}, {} ]
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  // data: 사용자가 폼에 입력한 정보
  conn.query(
    `INSERT INTO visitor (name, comment) VALUES('${data.name}', '${data.comment}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('Visitor.js', rows);
      callback(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, callback) => {
    console.log('id: ',id);
    conn.query(
        `DELETE FROM visitor WHERE id = '${id}' `,
        (err, rows) => {
            if (err) {
                throw err;
            }

            console.log('Visitor.js', rows);
            callback(rows)
        }
    )
}
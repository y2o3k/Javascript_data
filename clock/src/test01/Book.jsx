import React from 'react';

function Book(props){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 책의 이름은  ${props.name}페이지 입니다.`
            ),
            React.createElement(
                'h2',
                null,
                `이 책은 총 ${props.numOfPage}페이지 입니다.`
                )
        ]
    )
}

export default Book;

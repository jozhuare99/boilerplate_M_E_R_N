import '../Styles/tictactoe.css';
import { useState } from 'react';
function Square({value, onSquareClick}){
    return(
        <button className='square' onClick={onSquareClick}>
            {value}
        </button>
    )
}


 function Board({xIsNext, squares, onPlay, currentMove}){
     function handleClick(i){
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }
    const winner  = calculateWinner(squares);
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: '+ (xIsNext ? 'X' :  'O');
    } 


    const board = squares.map((square, index) => {
        return <Square key={index} value={square} onSquareClick={() => handleClick(index)} />;
    });
        let ROW = []
        board.forEach((item,index) => {
            if(index % 3=== 0) ROW.push([item,board[index+1],board[index+2]])
        });

    
   const BoardRow = ROW.map((row,index)=>{
    let SquareRows = []
      SquareRows.push(<div className='board-row' key={index}>{row}</div>)
     
    return SquareRows;
   })

    // function renderBoardSquare(square,i){
    //     return <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
    // }
    // function renderSquare(n){
    //     let squaresX = []
    //     for(let i = 0; i < 3; i++){
    //         squaresX.push(
    //            renderBoardSquare(i)
    //         )
    //     }
    //     return squaresX;
    // }
    // function RenderRows(){
    //     return <div className='board-row'>{renderSquare(3)}</div>
    // }
   
    return(
        <div>
            <div className='status'>{status}</div>
            <div className='current-move'>You're Current move is #{currentMove}</div>
            {BoardRow}
                {/*
                <div className='board-row'>
                <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
                <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
                <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
                </div>
                */}
            {/* <div className='board-row'>
                <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
                <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
                <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
                <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
                <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
            </div> */}
        </div>
    )
}
export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }
    function jumpTo(nextMove){
        setCurrentMove(nextMove)
    }
    const  Moves = history.map((squares,move)=>{
        let description;
        if(move >0){
            description = 'Goto move #' + move;
        } else {
            description = 'Go to game start';
        }
        return(
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        )
    })
    return(
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
            </div>
            <div className='game-info'>
                <ol>{Moves}</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i]
     
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            return squares[a];
        }

    }
    return null;
}
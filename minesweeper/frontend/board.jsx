import React from "react";
import Tile from "./tile";



class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        // debugger
        return (
            <div id="board">
                <div className="outerRow">
                {this.props.board.grid.map((row, idx1) => {
                //    debugger
                    return <div key={idx1} row={idx1} className="row">
                    {row.map((tile, idx2) => {
                        // debugger
                       return  < Tile tile={tile} key = {idx2}  updateGame={this.props.updateGame}/> 
                      
                    })}
                    
                    </div>
                })} 
                </div>
            </div>
        )
    }
}

export default Board;
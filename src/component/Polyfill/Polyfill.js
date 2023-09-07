import React from 'react'

export default function polyfill(){
    Array.prototype.customMap=function(callback){
        let result=[]
        for(let i=0; i<this.length;i++){
            const element = this[i]
            result.push(callback(element))
        }
        return result;
    }
    
    const arr=[1, 2, 3, 4, 5]

    const arrNuevo = arr.customMap((elem)=>elem*2);
    console.log(arrNuevo)

    return(
        <div>Polyfill</div>
    )
}

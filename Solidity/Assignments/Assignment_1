// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArrayElement{
    uint[] arr;
    function input(uint n) public 
    {
        for(uint i=1;i<=n;i++)
        {
            arr.push(i);
        }
    }

    function getArray() public view returns(uint[] memory)
    {
        return arr;
    }

    function removeElement(uint index)public 
    {
        require(index<arr.length,"Array out of bounds");
        for(uint i=index;i<arr.length;i++)
        {
            uint n = i+1;
            if(n>=arr.length)
            {
                n=n-1;
                arr[i]=arr[n];
            }
            else {
                arr[i]=arr[n];
            }    
        }
        arr.pop();
    }
}

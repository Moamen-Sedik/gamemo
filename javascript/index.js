let title = document.querySelector('.gametitle');
let turn = 'x';
let square = [];
function winner ()
{
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;

        if (square[i] === '') {
            isDraw = false;
        }
    }
    if (isDraw) {
        title.innerHTML = 'DRAW';
        setInterval(function () {
            title.innerHTML +='.';
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 3000);
        return;
    }
    else if (square[1] == square[2] && square[2] == square[3] && square[3] != '')
    {
        title.innerHTML = `${square[1]}winner`;
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+2).style.background = '#000';
        document.getElementById('item'+3).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)
    }
    else if (square[4] == square[5] && square[5] == square[6] && square[6] != '')
    {
        title.innerHTML = `${square[4]}winner`;
        document.getElementById('item'+4).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+6).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[7] == square[8] && square[8] == square[9] && square[7] != '')
    {
        title.innerHTML = `${square[7]}winner`;
        document.getElementById('item'+7).style.background = '#000';
        document.getElementById('item'+8).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[1] == square[4] && square[4] == square[7] && square[4] != '')
    {
        title.innerHTML = `${square[4]}winner`;
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+4).style.background = '#000';
        document.getElementById('item'+7).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[2] == square[5] && square[5] == square[8] && square[5] != '')
    {
        title.innerHTML = `${square[2]}winner`;
        document.getElementById('item'+2).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+8).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[3] == square[6] && square[6] == square[9] && square[6] != '')
    {
        title.innerHTML = `${square[9]}winner`;
        document.getElementById('item'+3).style.background = '#000';
        document.getElementById('item'+6).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[1] == square[5] && square[5] == square[9] && square[9] != '')
    {
        title.innerHTML = `${square[5]}winner`;
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 4000)

    }
    else if (square[7] == square[5] && square[5] == square[3] && square[3] != '')
    {
        title.innerHTML = `${square[5]}winner`;
        document.getElementById('item'+7).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+3).style.background = '#000';

        setInterval(function(){title.innerHTML+='.'},1000 )
        setInterval(function(){location.reload()}, 2000)

    }
}
function game (id)
{
    let Element = document.getElementById(id);
    if (turn === 'x' && Element.innerHTML == '')
    {
        Element.innerHTML = 'x'
        turn = 'o'
        title.innerHTML = 'o'
    }
    else if (turn === 'o' && Element.innerHTML == '')
    {
        Element.innerHTML = 'o'
        turn = 'x'
        title.innerHTML = 'x'
    }
    winner ();
}
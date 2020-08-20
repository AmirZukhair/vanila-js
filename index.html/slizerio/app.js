let canvas = document.getElementById('canvas');
let  ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let blockSize = 10;

let heightInBlocks = height / blockSize;

let widthInBlocks = width / blockSize;
let score = 0;





function drawBorder(){
	ctx.fillStyle = 'gray';
	ctx.fillRect(0,0,blockSize, height);
	ctx.fillRect(0,0,width, blockSize);
	ctx.fillRect(width - blockSize,0,blockSize, height);
	ctx.fillRect(0,height - blockSize, width, blockSize);

}

function showScore(){
	
	ctx.font = '21px Rajdhani';
	ctx.fillStyle = '#000';
	
	ctx.fillText('score: ' + score, blockSize , 25);
}

function gameOver(){
	playing =false;
	ctx.font = '40px Permanent Marker, cursive';
	ctx.fillStyle = 'red';
	ctx.textAlign = 'center';
	ctx.textBaseline  = 'center';
	ctx.fillText('Game Over', width / 2, height /2,);
}

drawBorder();

let Block = function(col,row){
	this.col = col;
	this.row = row
}


Block.prototype.drawSquare = function(color){
	this.x = this.col * blockSize;
	this.y = this.row * blockSize;
	ctx.fillStyle  = color;
	ctx.fillRect(this.x,this.y, blockSize,blockSize);
}


Block.prototype.equal = function(otherBlock){
	return this.col === otherBlock.col && this.row === otherBlock.row;
}

function drawCircle(x,y,radius,fillCircle,color){
	ctx.beginPath();
	ctx.arc(x,y ,radius, 0, Math.PI * 2, true);
	ctx.fillStyle = color;
	if(fillCircle){
  ctx.stroke();
} else{
  ctx.fill();
}

}

Block.prototype.apple = function(){
let centerX = this.col * blockSize + blockSize /2;
  let centerY = this.row * blockSize + blockSize /2;

  drawCircle(centerX,centerY, blockSize / 2, false);
}


function Apple(){
	this.possition = new Block(10,10);
}

Apple.prototype.draw = function(){
  this.possition.apple();
}

Apple.prototype.move = function(){
	let randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1);
	let randomRow = Math.floor(Math.random() * (heightInBlocks - 2) + 1);

	this.possition = new Block(randomCol,randomRow);
}
let apple = new Apple();




let Snake = function(){
	this.segments = [
	new Block(7,5),
	new Block(6,5),
	new Block(5,5)
	];
	this.direction = 'right';
	this.nextDirection = 'right';
}





Snake.prototype.draw = function(){
	
	
		

	
     let isEvenSegment  =false;
      this.segments.forEach(seg=>{
       if(isEvenSegment){
       	seg.drawSquare('lime');
       } else{
       	seg.drawSquare('green');
       }
       isEvenSegment = !isEvenSegment;
      })
}


Snake.prototype.checkCollision = function(head){
	let left = (head.col === 0);

	let top = (head.row === 0);

	let right = (head.col === widthInBlocks  - 1);
	let down = (head.row === heightInBlocks -1);
	let wallCollision = left || top || right || down;

	let selfCollision = false;

	this.segments.forEach(item=>{
		if(head.equal(item)){
			selfCollision = true;
		}
	})

	return wallCollision || selfCollision;
}

Snake.prototype.setDirection = function(newDirection){
	if(this.direction === 'right' && newDirection === 'left'){
		return;
	} else if( this.direction === 'left' && newDirection === 'right'){
		return;
	} else if( this.direction === 'top' && newDirection === 'down'){
		return;
	} else if( this.direction === 'down' && newDirection === 'top'){
		return;
	}

    this.nextDirection = newDirection;

}


Snake.prototype.move = function(){
	let head = this.segments[0];
	

this.direction = this.nextDirection;
let newHead;
	if(this.direction === 'right'){
		newHead = new Block(head.col + 1,head.row);
	} else if(this.direction =='down'){
		newHead = new Block(head.col,head.row +1);

	}else if(this.direction =='left'){
		newHead = new Block(head.col - 1,head.row);

	}else if(this.direction =='top'){
		newHead = new Block(head.col,head.row -1);

	}
	 else{
	 	return;
	 }



	

	if(this.checkCollision(newHead)){
		gameOver();
	 	return;
	 } 
	 this.segments.unshift(newHead);
	 
	if(newHead.equal(apple.possition)){
		score++;
		apple.move();
		animationTime -= 4;
	 	
	} else{
		this.segments.pop();
	}
	


}
let block = new Block(10,10);
let snake = new Snake();



let keyNames = {
	37: 'left',
	38: 'top',
	39: 'right',
	40: 'down',
};

window.addEventListener('keydown', function(e){
 let direction =  keyNames[e.keyCode]
 if(direction !== undefined){
   snake.setDirection(direction);
 }


})

let body = document.querySelector('body');
  window.addEventListener('keydown',function(e){
  	
  	if(e.keyCode === 13){
     location.href = location.href;
  	}
  })




var playing = true;
    var animationTime = 100;

    // Создаем функцию игрового цикла, вызывающую саму себя используя setTimeout
    var gameLoop = function () {
      ctx.clearRect(0, 0, width, height);
      showScore();
      snake.move();
      snake.draw();
      apple.draw();
      drawBorder();

      // Устанавливается в false функцией gameOver
      if (playing) {
        setTimeout(gameLoop, animationTime);
      }
    };

    // Начинаем игровой цикл
    gameLoop();


import React,{ Component} from 'react';
import './index.css';


// import  Random from 'react-random'


 class MySnakeGame extends React.Component {

    food_x=150; 
    food_y=150;
    x=100; 
    y=100; 
    Arr = []; 
    key_name = 'none'; 
    state= {a:0}; 
    score=2;
    score_initial=0; 
    score_player =  this.score_initial

    fun1 = (e)=>{
        this.key_name= e.key;
        //alert (e.key)
    } 

   
    food_collied (){
        if(this.x >= this.food_x - 10 && this.x <= this.food_x + 10 && this.y >= this.food_y - 10 && this.y <= this.food_y +10 )
           {
            return true
           } 
        else{
            return false
        }
            
    }


    snake_collide= () =>{
        this.Arr.map(e => 
            {
                if(e[0]==this.x && e[1]==this.y){
                this.score=0; 
                this.Arr=[] 
                
            }
        }) 
    }
    componentWillMount () {

        setInterval(() => {
            
            if( this.food_collied() ){
                this.food_x = Math.round (Math.random () * 400)  
                this.food_y = Math.round (Math.random () * 400)  
                this.score++
                this.score_initial++
            }

            if(this.snake_collide()){
                
                this.Arr=[]
           
            }

            if(this.Arr.length==0){
                this.score_initial=0; 
            }


            if(this.Arr.length > this.score){
                    this.Arr.splice (0,1); 
            }
            this.Arr.push ([this.x, this.y])
            switch (this.key_name)
            {
                case 'ArrowUp': 
                    this.y -= 10
                    break;
                    

                case 'ArrowDown': 
                    this.y += 10
                    break

                case 'ArrowRight': 
                    this.x += 10
                    break
                
                case 'ArrowLeft': 
                    this.x -= 10
                    break
            }
            if(this.x>485){this.x=0}; 
            if(this.x<0){this.x=495}; 
            if(this.y>480){this.y=0}; 
            if(this.y<0){this.y=490}; 

            this.setState ({a:0}); 
        },150); 
    }

    

    render(){
        <div class= "title"> Snake Game </div>
        return <div  style= {{margin:'1% 7% 7% 7%'}}>
        <div class= "title"> Snake Game </div>

        <div class="background" style={{display: 'center', flexDirection:'column', fontSize:'38px', width: '700px', height:'700px'}}>
            
            <div class="score "  >Score: {this.score_initial} </div>
           
            
            <input class="input"  onKeyDown={this.fun1} autoFocus/> 
            <div class="principal" style = {{position:'relative', width: '500px', height:'500px', borderRadius:'10px'}} > 
            <div style={{position: 'absolute', left:this.x , top:this.y,  width:'8px', height:'8px', borderRadius:'10px', border:'1px solid blue', background:'blue'}}></div> 
            {
              this.Arr.map ((e) => 
              <div style={{position: 'absolute', left:e[0] , top:e[1],  width:'8px', height:'8px', borderRadius:'10px', border:'1px solid skyblue', background:'skyblue'}}></div> 
                
              )
            }
            <div style={{position: 'absolute', left:this.food_x , top:this.food_y,  width:'8px', height:'8px', borderRadius:'10px', border:'1px solid skyblue', background:'yellow'}}></div> 



            </div>
        </div>
        </div>
    }

}

export default MySnakeGame;

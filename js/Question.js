class Form {

    constructor() {
      //this.input = createInput("Name");
      //this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
      this.input1 = createInput('Name');
      this.input2 = createInput('Answer');
      this.submit = createButton('Submit')
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      
    }
  
    display(){

      //var title, question, option1, option2, option3, option4;

      this.title.html("THE QUIZ.net");
      this.title.position(350, 0);

      this.question.html("Q: What was added in the Minecraft 1.16 Update?")
      this.question.position(150,80);
      this.option1.html("A. Magma Block")
      this.option1.position(150,100);
      this.option2.html("B. Ancient Debris")
      this.option2.position(150,120);
      this.option3.html("C: Soul Sand")
      this.option3.position(150,140)
      this.option4.html("D: Honeycomb Block")
      this.option4.position(150,160);

      this.input1.position(100, 360);
      this.input2.position(300, 360);
      this.submit.position(500, 360);
  
      this.submit.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.submit.hide();
        member.name = this.input1.value();
        memberCount+=1;
        member.index = memberCount;
        member.update();
        member.updateCount(memberCount);
        this.greeting.html("Hello " + member.name)
        this.greeting.position(130, 100);
      });
  
    }
  }
  
import React, { Component } from 'react';

class Input extends Component {

  inputBlur(e) {
    const nextStep = document.getElementById('next-step');
    let thisInput = e.target;

    if(thisInput.value === '') thisInput.style.border = '1px solid #f33';
    else {
      if(thisInput.classList.contains('amount') &&
        thisInput.value >= 1 && thisInput.value <= 10000) {
          thisInput.style.border = '1px solid #333';
          console.log(thisInput.value)
      } else if(thisInput.classList.contains('term') &&
                thisInput.value >= 1 && thisInput.value <= 12) {
        nextStep.style.pointerEvents = 'all';
      } else if(thisInput.classList.contains('inn') &&
                thisInput.value.length === 10) {
        let D = new Date("1900, 01, 01");
        let innValue = document.getElementById('inn').value.slice(0,5);

        D.setDate(D.getDate() + parseInt(innValue) - 1);

        let birth = new Date(D).getFullYear();

        if(new Date().getFullYear() - birth <= 17) {
          nextStep.remove();
          alert('Вы слишком малы для кредита!');
        }
      } else if(thisInput.classList.contains('firstName') && thisInput.value !== '') thisInput.style.border = '1px solid #333';
      else if(thisInput.classList.contains('lastName') && thisInput.value !== '') thisInput.style.border = '1px solid #333';
      else if(thisInput.classList.contains('city') && thisInput.value !== '') {
         thisInput.style.border = '1px solid #333';

         nextStep.style.pointerEvents = 'all';
      }

      else thisInput.style.border = '1px solid #f33';
    }
  }

  render() {
    return (
      <div>
        <input
          type={this.props.Type}
          className={this.props.Class}
          name={this.props.Class}
          id={this.props.Class}
          onBlur={this.inputBlur.bind(this)}
        />
      </div>
    );
  };
};

export default Input;

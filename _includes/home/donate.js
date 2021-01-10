window.addEventListener('load', (event) => {
  const donateButtons = document.querySelectorAll('[data-donate="button"]');
  const donateTransferText = document.querySelector('[data-donate-text="transfer"]');
  const donateClasses = {
    movedBtn: 'btn-text--moved',
    hiddenText: 'home-donate_text-details--hidden',
    transferText: 'home-donate_text--transfer'
  };

  donateButtons.forEach(button => {
    button.addEventListener('click', e => {
      const btnTexts = e.target.children;
      const btnType = e.target.dataset.donateType;
      const targetField = document.querySelector(`[data-donate-field="${btnType}"]`);

      targetField.classList.toggle(donateClasses.hiddenText);
      btnTexts[0].classList.toggle(donateClasses.movedBtn);
      btnTexts[1].classList.toggle(donateClasses.movedBtn);
      if (btnType === 'transfer') { donateTransferText.classList.toggle(donateClasses.transferText) };
    });
  });
});

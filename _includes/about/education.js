window.addEventListener('load', () => {
  const $educationCampaigns = document.getElementById('education-campaigns');
  const $educationPosters = document.getElementById('education-posters');
  const $educationModal = document.getElementById('education-modal');
  const $educationModalBgr = document.getElementById('education-modal-bgr');
  const $educationCloseBtn = document.getElementById('education-close-btn');
  const $educationImage = document.getElementById('education-image');
  const $educationPrev = document.getElementById('education-prev');
  const $educationNext = document.getElementById('education-next');
  let posterIndex;

  const hidePoster = () => {
    $educationModal.classList.remove('active');
  };

  const showImg = (index) => {
    $educationImage.innerHTML = `<img src="/assets/about/education-poster-${index}.jpg" alt="" />`;

    if (index == 1) {
      $educationPrev.classList.add('disabled');
    } else if (index == 10) {
      $educationNext.classList.add('disabled');
    } else {
      $educationPrev.classList.remove('disabled');
      $educationNext.classList.remove('disabled');
    }
  }

  const showPoster = (e) => {
    const targetIndex = e.target.dataset.poster;
    $educationModal.classList.add('active');
    showImg(targetIndex);
    posterIndex = parseInt(targetIndex);
  };

  $educationCampaigns.addEventListener('click', (e) => showPoster(e));
  $educationPosters.addEventListener('click', (e) => showPoster(e));
  $educationCloseBtn.addEventListener('click', () => hidePoster());
  $educationModalBgr.addEventListener('click', () => hidePoster());

  $educationPrev.addEventListener('click', () => {
    const newIndex = posterIndex - 1;
    if (newIndex > 0) {
      showImg(newIndex);
      posterIndex = newIndex;
    }
  });

  $educationNext.addEventListener('click', () => {
    const newIndex = posterIndex + 1;
    if (newIndex < 11) {
      showImg(newIndex);
      posterIndex = newIndex;
    }
  });
});

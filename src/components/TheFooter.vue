<template>
    <footer class="footer">
      <div class="footer-content">
        <h1 class="footer-title">DispoCars Support</h1>
        <div class="contact-info">
          <div class="phone item-wrapper">
            <img src="@/assets/icons/phone-solid-white.svg" alt="Phone" class="icon"/> <!-- Replace with your phone icon path -->
            <span>+371 2999999</span>
          </div>
          <div class="email item-wrapper">
            <img src="@/assets/icons/footer_email_ico.svg" alt="Email" class="icon"/> <!-- Replace with your email icon path -->
            <span>support@dispocars.com</span>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'TheFooter'
  };
  </script>
  
  <style lang="scss" scoped>
  @import "../assets/scss/common-styles";
  .footer {
    height: 100px;
    background-color: $navy; /* Replace with your desired background color */
    color: $white; /* Adjust text color for better visibility on your background */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  
  .footer-content {
    text-align: center;
  }
  
  .footer-title {
    margin: 0;
    padding-bottom: 10px;
    font-size: 20px;
    font-family: $font-family-bold;
  }
  
  .contact-info {
    display: flex;
    justify-content: center;
    gap: 20px; /* Adjust gap as needed */
    align-items: center;

    .item-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
  
  .icon {
    margin-right: 8px; /* Space between icon and text */
    width: 20px;
    height: 20px;
    
    svg {
        fill: #ffffff;
    }
  }
  </style>
  
  
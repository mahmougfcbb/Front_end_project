// Main.js
import React from 'react';

function Main() {
  const mainStyle = {
    padding: '20px',
    backgroundColor: '#fff',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  return (
    <main style={mainStyle}>
      <section style={sectionStyle}>
        <h2>Welcome to Little Lemon</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          accumsan, turpis ac mattis aliquam, mauris tellus scelerisque nulla,
          non ullamcorper elit est ac neque. Sed ac tellus dui. Nulla facilisi.
          Sed eget sapien id lacus dapibus vestibulum. Phasellus egestas dui
          vitae metus blandit, eu mollis odio pulvinar. Vivamus accumsan id
          turpis et varius. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nam suscipit blandit
          imperdiet. Integer in velit a justo fringilla pharetra.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Our Menu</h2>
        <p>
          Check out our delicious menu items and find your new favorites! We
          offer a wide variety of dishes to satisfy any palate. From fresh
          salads to mouthwatering desserts, we've got it all.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Contact Us</h2>
        <p>
          Have questions or want to make a reservation? Contact us today! Our
          friendly staff is ready to assist you with any inquiries or special
          requests.
        </p>
      </section>
    </main>
  );
}

export default Main;

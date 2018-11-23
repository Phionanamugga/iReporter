<div class="video1">
<p><strong></strong> Corruption in court</p>

<video width="40%" controls id="myvideo">
  <source src="rain.mp4" type="video/mp4">
  <source src="rain.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
</div>
<div class="video2">
    <p><strong></strong> Corruption in hospital</p>
    
    <video width="40%" controls id="myvideo">
      <source src="rain.mp4" type="video/mp4">
      <source src="rain.ogg" type="video/ogg">
      Your browser does not support the video tag.
    </video>
    </div>
    
<div>
    <button class="open-button" onclick="openForm()">comment</button>

<div class="chat-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <h1>Chat</h1>

    <label for="msg"><b>Message</b></label>
    <textarea placeholder="Type message.." name="msg" required></textarea>

    <button type="submit" class="btn">Send</button>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>







.video1{
  margin-left:15px;
  margin-top: 10px
}

.video2{
  margin-left:15px;
}

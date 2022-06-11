const audioTag = document.getElementsByClassName("audio_row__performer_title");
const list = []

  for (let i = 0; i < audioTag.length; i++) {
      list[i] = audioTag[i].innerText.replace(['\n'], ' ')
  }

window.open().document.write(list.join('<br/>'));
import React, { useState, useEffect } from "react";
import "./Chat_FeatureChat.css";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>>", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__body">
        <Avatar
          className="class_one"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <p className="chat__message ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dictum justo in tellus convallis, at aliquet justo facilisis. Ut id
          velit vehicula, pulvinar sem vitae, hendrerit ipsum. Phasellus varius
          bibendum quam, et tincidunt sem ornare ut. Vestibulum viverra aliquet
          nibh a placerat. Aenean nec cursus quam. Vestibulum laoreet enim vitae
          est venenatis, vitae scelerisque ipsum sodales. Morbi a eros nisl.
          Maecenas scelerisque metus leo, ac aliquam mauris molestie eget.
        </p>

        <Avatar
          className="class_two"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <p className="chat__receiver">
          Cras volutpat nisl tincidunt quam molestie tristique. Nam sit amet
          ullamcorper lectus, ac accumsan lectus. Sed aliquet mauris et nisl
          euismod, quis blandit ligula dapibus. Morbi ut fringilla nisl, at
          dignissim arcu. Nam euismod scelerisque tellus et fermentum. Phasellus
          vitae libero lacus. Donec sit amet lorem ut orci semper volutpat eget
          vitae risus. Aliquam nec neque ut urna dictum condimentum. Integer
          nisi diam, suscipit quis gravida sit amet, lacinia nec justo. Ut
          mollis tincidunt nibh, at bibendum mi semper a. Duis quis enim eros.
          Aliquam erat volutpat. Phasellus aliquam sollicitudin mauris sed
          sodales. Phasellus dictum a est ac blandit. Etiam eu ligula nisl.
          Nulla sed libero ipsum.
        </p>
        <Avatar
          className="class_one"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <p className="chat__message">
          Praesent sem mauris, fermentum id sagittis et, vestibulum id lorem.
          Sed dictum felis massa, in venenatis turpis dictum at. Donec venenatis
          lacus vitae nisl viverra consectetur. Proin sed elementum lacus.
          Suspendisse aliquet, ex nec posuere vehicula, mi ligula ullamcorper
          arcu, sit amet ullamcorper nulla ligula nec sapien. Phasellus rhoncus,
          arcu vitae semper rutrum, sapien dui luctus purus, in posuere augue
          velit eu nisi. Donec nibh sem, eleifend eget rutrum vitae, egestas a
          turpis. Fusce nec velit vel ex dignissim venenatis at sed nunc.
          Suspendisse hendrerit urna id justo dictum sodales. Proin nec
          venenatis dolor, quis iaculis libero. Duis molestie purus ac ornare
          tempor. Mauris finibus nulla in justo faucibus rutrum. Nam vitae enim
          turpis. Morbi elementum tincidunt libero, ac ultricies metus viverra
          at. Duis maximus sem in risus accumsan, nec scelerisque nibh
          condimentum. Suspendisse consectetur vitae leo vel euismod.
        </p>
        <Avatar
          className="class_one"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <p className="chat__message">
          Vestibulum sagittis finibus leo, a convallis purus scelerisque quis.
          Quisque condimentum ex fringilla tellus porta varius. Nullam at
          blandit magna. Donec eget mi dolor. Donec eu lacinia tellus, eget
          consectetur augue. Vivamus at venenatis est. Ut interdum non neque
          consequat ultricies. Nunc ac enim efficitur, dapibus sem eget, feugiat
          mauris. Cras tincidunt tempor rhoncus. Cras semper imperdiet lacinia.
        </p>
        <Avatar
          className="class_two"
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        />
        <p className="chat__receiver">
          Mauris at commodo felis. Nam vestibulum eleifend tempor. Pellentesque
          malesuada commodo eros vitae viverra. Sed vestibulum tempus lorem, at
          sollicitudin orci bibendum nec. Integer faucibus pulvinar ligula, quis
          consequat dui. Vestibulum at ante id ante mattis viverra. Vestibulum
          lobortis imperdiet mi et feugiat. Phasellus mattis elit arcu, nec
          faucibus ex cursus id. Suspendisse luctus quis tellus accumsan
          consequat. Mauris vitae orci suscipit, posuere mi ut, pulvinar magna.
          Maecenas eleifend non orci eu aliquam. Aenean dapibus sagittis tortor,
          a feugiat arcu porttitor tempor. Curabitur consequat placerat metus at
          iaculis. Quisque feugiat elementum vestibulum.
        </p>
      </div>
      <div className="chat__footer">
        <form>
          <div className="input__container">
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Text Message"
            />
          </div>
        </form>

        <SentimentVerySatisfiedIcon />

        <button onClick={sendMessage} type="submit">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;

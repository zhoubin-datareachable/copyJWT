const div = document.createElement('div');

/**
 * 复制文本
 * @param {*} str
 */
const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

/**
 * 复制jwt
 */
const copyJWT = () => {
  const jwt = localStorage.getItem('v2_dev_jwt');
  copyToClipboard(jwt);
};

/**
 * style
 */
const style = `
    <style>
      .cxk-box {
        position: fixed;
        display: flex;
        align-items: center;
        top: 50%;
        right: 0px;
        width: 100px;
        height: 30px;
        padding-left: 5px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border-radius: 2px;
        cursor: pointer;
        user-select: none;
        background: white;
        z-index: 9999999;
        color: #555;
        border-left: 2px solid rgb(216, 52, 52);
        transform: translateX(calc(100% - 8px));
        transition: all 0.3s ease;
      }
      .cxk-box:hover {
        transform: translateX(0);
      }
    </style>
`;

div.innerHTML = `
    <div>
      ${style}
      <div class="cxk-box">
        <svg
          class="icon"
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M795.648 762.0096H419.1744c-80.8448 0-146.432-65.536-146.432-146.432V239.104c0-80.8448 65.536-146.432 146.432-146.432h376.4736c80.8448 0 146.432 65.536 146.432 146.432v376.4736c0 80.896-65.536 146.432-146.432 146.432z"
            fill="#FFDF99"
          />
          <path
            d="M604.8256 939.776H228.352c-80.8448 0-146.432-65.536-146.432-146.432V416.9216c0-80.8448 65.536-146.432 146.432-146.432h376.4736c80.8448 0 146.432 65.536 146.432 146.432v376.4736c-0.0512 80.8448-65.5872 146.3808-146.432 146.3808z"
            fill="#FF5D50"
          />
          <path
            d="M552.96 553.9328H467.7632V468.7872c0-28.2624-22.9376-51.2-51.2-51.2s-51.2 22.9376-51.2 51.2v85.1456H280.2176c-28.2624 0-51.2 22.9376-51.2 51.2s22.9376 51.2 51.2 51.2h85.1456v85.1456c0 28.2624 22.9376 51.2 51.2 51.2s51.2-22.9376 51.2-51.2v-85.1456H552.96c28.2624 0 51.2-22.9376 51.2-51.2s-22.9376-51.2-51.2-51.2z"
            fill="#FFDF99"
          />
        </svg>
        <span>复制</span>
      </div>
    </div>
`;

div.addEventListener('click', copyJWT);

document.body.append(div);

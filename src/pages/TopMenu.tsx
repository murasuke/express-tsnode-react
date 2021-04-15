import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { getSearchResults } from "../utils/api";
import SearchResultList from "../component/SearchResultList";


const TopMenu: React.FC = () => {
    const [inputVal, setInputVal] = useState('');
    const [searchResult, setSearchResult] = useState<any[]>([]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setInputVal(e.target.value);
    };

    const handleClick: React.ReactEventHandler = async() => {
      const jsonResult = await getSearchResults({key: inputVal});
      setSearchResult(jsonResult);
    };

    return (
      <>
        <h3>TopMenu</h3>

        <div style={ {margin:"1vw", padding:"1vw", backgroundColor:"#DDE"} }>
          <div style={ {border:"1px solid #AAA"} } >
            <p>検索サンプル バックエンドからjsonでデータを受け取り表示する。バックエンド側では、テキストボックスの値をlikeで検索した結果を返す<br />
            現時点ではダミーデータに対して検索結果を返す実装としている（1や2を入力して検索）</p>
            <input value={inputVal} onChange={handleChange} onKeyPress={(e)=>{ if(e.key === "Enter") {e.preventDefault(); handleClick(e);}}} />
            <button type="button" onClick={handleClick}>検索</button>
            <SearchResultList results={searchResult} />
          </div>
          <div>
            <p><Link to="/Page1"><button type="button">Page1</button></Link> サンプル１：関数コンポーネント＋Hookでフォーム入力データをPostするサンプル</p>
            <p><Link to="/Page2"><button type="button">Page2</button></Link> サンプル２：上記に加え、useContextでデータ保持してPost(Reduxは未使用)</p>
          </div>
          <p>
            ■実装済み<br />
            ・ラジオボタン選択による表示切り替え <br />
            ・入力値をstateもしくはcontextへの更新 <br />
            ・バックエンドへのPOST(axios利用) <br />
            ・sequelize(ORマッパー)を利用したデータInsert処理<br />
            <br />
            ■未実装<br />
            ・URLにidをつけて表示した場合、その値で画面を表示し、更新を行う [/Page1/:id] <br />
            ・入力チェック <br />
            ・POST前の確認ダイアログ <br />
          </p>
        </div>
      </>
    );
  };

  export default TopMenu;

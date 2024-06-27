let data = [
    {
        member: "Pide",
        num:"20",
        CompetitionDay:"2015/10/1",
        ManagementUpDay:"スペシャリスト2016/12/1→部長 2018/7/1",
        experience:"紙部門→OPD部問→TV部門→WEB部門-制作→PR+Retail+CRM部門→制作部門→IMD部門-制作",
        experiencePJ:"PR PJ leader、教育PJ",
        mouthTitle:"醬子！、我(我)？、真的嗎？、應該～、就到了",
        content:
            [
                {
                    name: "Laoutu",
                    imgUrl: "./images/comment/laoutu.png",
                    title: `日本っぽいデザインセンスを教えてくれた師匠、仕事の態度を教えてくれた上司、そして当時迷った自分のを支えてくれた人生の先輩、本当にありがとうございました！一直以來謝謝你，辛苦了！`,
                },
                {
                    name: "Jake",
                    imgUrl: "./images/comment/jake.png",
                    title: `山田さん卒業おめでとう！！！また一緒に遊びましょう！！！`,
                },
                {
                    name: "Chuhan",
                    imgUrl: "./images/comment/chuhan.png",
                    title: `山田先生、いつも丁寧で優しく、
                    <br>製作に関する貴重なご意見をいただきありがとうございます！
                    <br>製作部にとって最も安心できる存在です…
                    <br>山田先生とあおち君がこれからもずっと幸せで楽しく過ごせますように。`,
                },
                {
                    name: "Rio",
                    imgUrl: "./images/comment/rio.png",
                    title: `雖然只有在轉正面試上接觸過，謝謝當時給我這個機會，讓我能成功轉正，希望未來的路上一切順順利利，天天開心 恭喜Pide畢業了🎉🎉　by Rio`,
                },
                {
                    name: "Lun",
                    imgUrl: "./images/comment/lun.png",
                    title: `Pide〜〜！最終日がなんときましたね！
                    <br>昔からずっとお世話になって、仕事上のノウハウ、助けはいつもいただいて、感謝するしかないです。
                    <br>その凄いまとめ力とCreative発想がほんとに半端ないね！
                    <br>昔は何回もPideのおかげでうまくいかない案件は解決策が見つかって無事に対応できましたー笑
                    <br>そのうちに喧嘩の数も減ってないけど、あなたはほんとに我の仕事上の大貴人です、笑
                    <br>これから仕事も少し絡むので、また一緒に働くことにワクワクです⭐️
                    <br>これからもよろしくねー！-by 最高のパートナーLUN`,
                },
                {
                    name: "Jenny",
                    imgUrl: "./images/comment/jenny.png",
                    title: `Pideまさか私より早めにSTAから卒業するなんで！！！シンプルラボからSTA制作部門来て一緒に同じ部門でっという間で1年半経って、色々なクリエティブ観点を学べて、制作のコピーライティング強化もある程度実現できて、悩む時もいつも相談乗ってくれて、本当に感謝しかないですね！
                    <br>これから你們がいないSTA生活想像できないけど、我はPideの分も一緒に頑張っていきます！STAから卒業しても、定期的に一緒に食事＆遊びしてね！`,
                },
                {
                    name: "Weaver",
                    imgUrl: "./images/comment/weaver.png",
                    title: `你がもうすぐ卒業ですね！我が寂しく感じますね！祝福你畢業おめでとうございます！`,
                },
                {
                    name: "Cathy",
                    imgUrl: "./images/comment/cathy.png",
                    title: `新たなスタートを切られるとのこと、おめでとうございます。
                    <br>今日まで山田さんと共に働けたこと、心から感謝しています。
                    <br>これからのご活躍を心からお祈りしております。`,
                },
                {
                    name: "Tsuki",
                    imgUrl: "./images/comment/tsuki.png",
                    title: `山田さんは私にとってSTAは良い印象を持ってた重要な人物です！(笑)
                    <br>最初の面接官として色々聞いてくれて本当に優しかった～
                    <br>私がPR部門に入ったばかりの時に山田さんは少し神秘性を持って、常に何を考えている様な感じと思ったけど、結局「無」なムードが多かったよね～このギャップ萌え感は面白かったです。
                    <br>仕事上に山田さんは口が少ないが、やるときはやるという姿勢があるので、いつも単刀直入で本質的な意見を言っている。とても頼れる存在だと思います！色々ありがとうございました！
                    <br>STAを卒業した後、これから山田さんは自分の道を開きますね～良いことになるように祈ります！祝福Pide永遠保持28歲的容顏跟心態，青春永駐!!`,
                },
                {
                    name: "Ruby",
                    imgUrl: "./images/comment/ruby.png",
                    title: `「相信明天更好的自己」と山田さんより名言。覚えてますか？以前、山田さんよく言ってました中文だよ。この名言を覚えて次の道へ進もう！`,
                },
                {
                    name: "Nita",
                    imgUrl: "./images/comment/nita.png",
                    title: `STA入社前の最終面接は山田さんとKasaでしたね！その時私の日本語はまだボロボロ的😅謝謝山田さん那時候給我機會讓我加入STA🥰
                    <br>山田さんのメンバーになって本当に嬉しかったです！山田さんには、いろいろなことを教えていただき、とても勉強になりました😊祝畢業快樂～毎日順利開心、身體健康！`,
                },
                {
                    name: "Kashin",
                    imgUrl: "./images/comment/kashin.png",
                    title: `山田さんは本当に優しい上長し、困ったも時色々聞かせていただいて本当に心から感謝しています😭
                    <br>またご飯でも行きましょう(あおちも会いたいです🥺)
                    <br>いつもお世話になりました！`,
                },
                {
                    name: "Yang",
                    imgUrl: "./images/comment/yang.png",
                    title: `謝謝山田さん在製作早C晚A面膜LP的多次指教，雖然很多修改，但是作為設計師因此學到了很多，看到成品的時候真的很開心！謝謝！`,
                },
                {
                    name: "Nina",
                    imgUrl: "./images/comment/nina.png",
                    title: `我要用中文寫，謝謝山田老師好多好多的指教！讓我從0.1人前から變成半人前の企劃！以後也還有很多繼續努力的事情！謝謝STA讓我遇到山田老師！以後也請多多指教🥹 山田老師！畢業快樂！`,
                },
                {
                    name: "Peko",
                    imgUrl: "./images/comment/peko.png",
                    title: `雖然想說的話都在卡片跟1on1的時候講完了
                    <br>但還是再說一遍！很慶幸Pide成為我的馬內
                    <br>每次都很盡力幫我解決各種疑難雜症
                    <br>在pide身上也學到超級多事情，覺得自己可以成長成今天這樣
                    <br>很大一部份都要感謝pide
                    <br>一起製作的粉底液LP雖然沒有配信成功ＱＱ但好希望有朝一日可以測試看看
                    <br>祝福未來pide可以做自己想做的事情！在一起出去玩吧：）
                    <br>勿忘PPK小組~PPK最高!`,
                },
                {
                    name: "Tsuzuki",
                    imgUrl: "./images/comment/tsuzuki.png",
                    title: `長い間ご苦労様でした！
                    <br>これからのお話是非聞かせてほしいので、また日本か台湾で飲みに行きましょー！
                    <br>あおちにもよろしくお伝えください！
                    <br>改めて長年、お疲れ様でした。`,
                },
                {
                    name: "Kawai",
                    imgUrl: "./images/comment/kawai.png",
                    title: `山田さんー！ビール飲みに行きましょ！`,
                },
                {
                    name: "Sen",
                    imgUrl: "./images/comment/sen.png",
                    title: `Ella卒業おめでとうございます！期待有一天SHE可以在山田桑的咖哩店集合！`,
                },
                {
                    name: "Yoji",
                    imgUrl: "./images/comment/yoji.png",
                    title: `残り数少ないFSGとしての先輩がいなくなってしまうのがさみしいです。僕よりもFSオフィスにいたという意味では先輩なので、20年近くにわたりグループに貢献いただけましたね。本当に長い間お疲れ様でした。せっかく天母仲間になったと思ったら遊ぶ時間もなかったのは残念ですが、今後も近いフィールドで仕事をされると思いますのでまたどこかでご一緒できればと思います。またどこかでお会いしましょう～。`,
                },
                {
                    name: "Kyanemoto",
                    imgUrl: "./images/comment/kyanemoto.png",
                    title: `FS時代から色々お世話になり、本当にありがとうございます！
                    <br>また長い間、お疲れ様です。
                    <br>（新入社員時代に横尾さん達と家にお邪魔したり、九州旅行にご一緒させて頂いたり、そんなに昔ではない記憶ですが、もう10年以上も前と考えると月日が流れる速さに驚きです）
                    <br>
                    <br>STAにも早期から参画頂いて、CRM部門の立ち上げなど山田さんの力のお陰で部門として飛躍できたこと、良いチームが作れたこと、非常に感謝しています！
                    <br>自分がSimple Lab設立後はあまり関わる機会も減ってしましまいましたが、制作部門の質等も山田さんのお陰で向上した部分が大きく、長い間のご尽力に改めて感謝いたします。
                    <br>今回、退職されると聞いたときは驚きが強く、会社の状況面に関しては申し訳ない気持ちがありますが、これからも更なるご活躍を期待しています！
                    <br>またどこかでご飯等もご一緒させて下さい！`,
                },
                {
                    name: "Miki",
                    imgUrl: "./images/comment/miki.png",
                    title: `2015年10月、共に台湾の地に足を踏み入れてから、8年9ヵ月。
                    <br>幾多の出来事と感情が蠢く中、本当にお疲れさまでした。
                    <br>
                    <br>人生は山あり谷あり、だからこそ面白い。
                    <br>次のステージも存分に満喫してください。
                    <br>
                    <br>あおちと一番近くで応援し、
                    <br>共に喜び合えること、楽しみにしています。`,
                },
                {
                    name: "AO",
                    imgUrl: "./images/comment/ao.png",
                    title: `これからもがんばろうね。パパ👨大好きだよ。`,
                },
                {
                    name: "DAMIAN",
                    imgUrl: "./images/comment/damian.png",
                    title: `先生はSTAの品質担保と同じ存在であり、これからも連携できる場があったらいいですね！ I wish you the best !`,
                },
                {
                    name: "Fujiwara",
                    imgUrl: "./images/comment/fujiwara.png",
                    title: `山田さん、これまでありがとう。もう10何年の付き合いですが、独立の道を歩む大きな決断はすごいと思います。これからもずっとよろしくです！これからも一緒にたくさんおもしろい仕事しましょう！`,
                },
                {
                    name: "Daphne",
                    imgUrl: "./images/comment/daphne.png",
                    title: `祝山田老師畢業快樂! 祝福未來一帆風順、事事順心!`,
                },
                {
                    name: "Jamie",
                    imgUrl: "./images/comment/jamie.png",
                    title: `Dear 山田 : 完全不會日文的我 , 沒什麼機會跟你說到話 , 每次聽到山田老師說起中文都覺得超級可愛 , 謝謝山田老師之前的LP設計指導 , 往後的日子祝福一切順心快樂唷~`,
                },
                {
                    name: "Yufang",
                    imgUrl: "./images/comment/yufang.png",
                    title: `山田さん、大変お世話になりました。
                    <br>クリエイティブについていつも多くのご助言をいただき、大変勉強になりました！ありがとうございました！
                    <br>山田さんにご指導いただいたことを大切に今後も仕事に邁進してまいります。
                    <br>今後の益々のご健勝とご多幸をお祈りいたします。`,
                },
                {
                    name: "Kimi",
                    imgUrl: "./images/comment/kimi.png",
                    title: `Dear 山田さん~長い間お仕事お疲れ様でした。ʕ•ᴥ•ʔ 色々なクリエイティブご指摘いただきありがとうございます。新しい道への前進を祝い、インスタの投稿も楽たのしみにしています。`,
                },
                {
                    name: "Erika",
                    imgUrl: "./images/comment/erika.png",
                    title: `ご卒業おめでとうございます！今まで本当にお世話になりました。クリエイティブの発想も構成のロジック面も、毎回の会議でたくさんの学びがありました。そして面談の時は会社についても人生についても、山田さんから多くのアドバイスをいただき、すごく刺激になりました。頼もしくて優しい山田さんが大好きです♡これからのすべてが順調で、毎日が楽しいものでありますように！またいつか、一緒にラーメンを食べる機会があると嬉しいです。ぜひオススメ教えてください笑！`,
                },
            ]
    },
    {
        member: "Hanew",
        num:"32",
        CompetitionDay:"2016/5/9",
        ManagementUpDay:"2017/7/1",
        experience:"紙部門→オフライン部門→CRM部門-制作→TV部門→制作部門→IMD部門-制作",
        experiencePJ:"イベントPJ、PR PJ 、office PJ",
        mouthTitle:"欸～？、哼！、吃飯！、輕的放上面重的放下面最上面不要放東西",
        content:
            [
                {
                    name: "Laoutu",
                    imgUrl: "./images/comment/laoutu.png",
                    title: "入社當時一起發想了好多企劃，一起天馬行空(然後被打槍)；永不放棄的態度，讓我受益良多，希望以後還能在各個地方看到你才華洋溢的作品!",
                },
                {
                    name: "Jake",
                    imgUrl: "./images/comment/jake.png",
                    title: "畢業快樂~~~",
                },
                {
                    name: "Chuhan",
                    imgUrl: "./images/comment/chuhan.png",
                    title: "我的第一個上長黑奴~謝謝你在我剛進來什麼都不懂的時候，給我很多建議跟幫助！",
                },
                {
                    name: "Rio",
                    imgUrl: "./images/comment/rio.png",
                    title: `製作部的三巨頭之一Aka動物模仿大師，恭喜你要畢業啦🎉🎉，感謝你每當有問題的時候，都會放下手邊工作幫忙解決，這半期公司縮小需要規劃，也是你一手包辦處理，這陣子辛苦你了，祝你未來天天開心順順利利，在任何地方發光發熱🎉🎉  by RIo
                    <br/> ps:太好奇鴨子聲音到底怎麼做到的實在有夠像XDDD`,
                },
                {
                    name: "Lun",
                    imgUrl: "./images/comment/lun.png",
                    title: `嗨黑奴～！沒想到最喜歡亞星通的你也要離開了>< 
                    <br/>謝謝你過去在公司許多的照顧，
                    <br/>尤其很多大案子（特別難做的那種）多虧有你幫忙才能順利落幕！
                    <br/>祝福你接下來有很棒的發展，工作加油！`,
                },
                {
                    name: "Weaver",
                    imgUrl: "./images/comment/weaver.png",
                    title: `yo 表哥 畢業快樂！(雖然共事時間沒有很長～)祝福你一路順風！`,
                },
                {
                    name: "Tako",
                    imgUrl: "./images/comment/tako.png",
                    title: `Dear黑奴
                    <br>第一次見面是在實體面試，謝謝你在我緊張講不出來的時候協助翻譯XD
                    <br>雖然認識的時間不算長，平時互動較少；
                    <br>但感覺得出來黑奴是很受大家信賴的マネージャー，
                    <br>很佩服黑奴常常能活絡製作部的氣氛，
                    <br>負責部門內各種大小事，還要監工辦公室整修
                    <br>謝謝黑奴辛苦付出!
                    <br>祝福往後一切順利
                    <br>恭喜畢業🎊by Tako`,
                },
                {
                    name: "Tsuki",
                    imgUrl: "./images/comment/tsuki.png",
                    title: `常常會在很遠很遠的地方就聽到很大聲的笑聲!!一下就知道黑奴就在前面了，識別度超級高~
                    <br>還記得剛進來PR部門的時候，因為連續接了幾個一日店長活動，有機會可以跟黑奴合作，才知道在黑奴很樂觀開朗的表面下，也是有很真面目跟自己堅持的地方!讓我很佩服~
                    <br>當時在業務面常常會因為客戶的要求，要做很臨時的設計的調整，非常感謝黑奴雖然很忙也都還是會很即時的幫我生出示意圖或是設計圖!!本当に助かりました！色々ありがとう！
                    <br>離開待了好久的亞星通，祝福你在未來的日子也能一帆風順，永遠保持笑口常開!!`,
                },
                {
                    name: "Nita",
                    imgUrl: "./images/comment/nita.png",
                    title: `只當了3個月黑奴短暫的Member，但不知道為什麼莫名的就加入了鴨子旅行社然後還成為固定班底🦆
                    <br>雖然有時候黑奴會不自覺的嗓門很大，搞笑的點也會讓人有點不知道該怎麼反應，但在工作上卻又很可靠👍🏾很感謝黑奴每次在我請教問題的時候都很有耐心地跟我說明，在新規開跑、攝影會也給予很多協助！
                    <br>之後在辦公室就聽不到黑奴的大嗓門了或許會有一點點寂しい，但祝福黑奴未來都可以順順利利一直很有元氣☀`,
                },
                {
                    name: "Kashin",
                    imgUrl: "./images/comment/kashin.png",
                    title: `對黑奴的第一印象就是笑聲很豪邁哈哈哈哈，跟peko Nina Nita很好🤣後來發現你很會畫畫！！畫風超級可愛真的超有才華！！希望黑奴未來也一切順利！健健康康！！`,
                },
                {
                    name: "Yang",
                    imgUrl: "./images/comment/yang.png",
                    title: `謝謝黑奴在PR PJ和BeStar的帶領和幫助，讓這些事情都變得更有趣、但同時又很有效率！另外也謝謝推薦宇宙兄弟，我會追下去看完的！`,
                },
                {
                    name: "Nina",
                    imgUrl: "./images/comment/nina.png",
                    title: `黑奴叔叔？老師？先說畢業快樂～總算輪到你了哈哈哈在當你member的時候是我成長最劇烈（各種層面也最痛苦？）的半期，學到很多～也很開心那時候遇到的是黑奴，才有現在的我🥺之後也要過得好好的，不要亂喝可樂🤣`,
                },
                {
                    name: "Peko",
                    imgUrl: "./images/comment/peko.png",
                    title: `我的第一任老爸～竟然要畢業了
                    <br>感覺亞星通少了你之後會變得🦆雀無聲
                    <br>好好笑
                    <br>感謝老爸一路把我拉拔長大，還要聽我抱怨一堆事情
                    <br>㊗️老爸未來一切順利，貸款早日還清～
                    <br>期許鴨子旅行社未來可以出國玩～`,
                },
                {
                    name: "Tsuzuki",
                    imgUrl: "./images/comment/tsuzuki.png",
                    title: `めっちゃ久しぶりですHanewさん！
                    <br>OPDの時はお世話になりました！
                    <br>次のステージでも応援してます！`,
                },
                {
                    name: "Kawai",
                    imgUrl: "./images/comment/kawai.png",
                    title: `Hanew同學！愛你❣️`,
                },
                {
                    name: "Sen",
                    imgUrl: "./images/comment/sen.png",
                    title: `Hanew 恭喜畢業！希望你無論在哪都能保持無人能敵的幽默感😆`,
                },
                {
                    name: "Yoji",
                    imgUrl: "./images/comment/yoji.png",
                    title: `早朝出社おじさん組がひとりいなくなってしまうのが悲しいよ。朝のオフィスに電気をつけずに、デスクライトだけで仕事しているハニュー。いつもあんなに元気なのに、朝は全然挨拶してくれないハニュー。春になってもずっとダウンを来ているハニュー。支えてくれてありがとう。本業務だけではなくイベントやPJでも盛り上げてくれてありがとう。またどこかで一緒に仕事ができますように。`,
                },
                {
                    name: "Kyanemoto",
                    imgUrl: "./images/comment/kyanemoto.png",
                    title: `STAの初期から長くに渡り制作全般に尽力してくれて本当にありがとう！
                    <br>クライアント支援だけではなく、会社のPRやイベントなどにも積極的に参加してくれたこと、ハニューの貢献が会社が発展にも影響していると思うので、本当に感謝です。
                    <br>
                    <br>普段ふざけているイメージが強いハニューだけど、会社への貢献意識の高さや頼んだことに対して基本前向きに取り組んでくれる姿勢など、特に初期は色々なことをやらないといけなかったのでハニューがいてくれたことで本当に助かったこと多かったです。
                    <br>
                    <br>また、当時、ハニューの面接したことを今でも覚えているくらい印象が強く、面接時から面白そうな人だなと思ってました。笑
                    <br>今回、会社の状況面に関しては申し訳ない気持ちがあり、退職になってしまうのは寂しい部分もありますが、これからの人生が一層充実するように願ってます！`,
                },
                {
                    name: "Miki",
                    imgUrl: "./images/comment/miki.png",
                    title: `2016年5月9日、Hanewの入社当時のこと、
                    <br>今でもよく覚えています。
                    <br>
                    <br>同じオフラインチームで、戦った日々。
                    <br>Hanewがマネージャーに昇格した時のこと。
                    <br>Job博やPRPJで、いつも人を助け、支えてくれたこと。
                    <br>
                    <br>本当にHanewには感謝しかないです。
                    <br>8年と2カ月、本当にお疲れ様でした。
                    <br>
                    <br>そして、これからもよろしくね！`,
                },
                {
                    name: "AO",
                    imgUrl: "./images/comment/ao.png",
                    title: `AO Designがんばってね。これからも🤘（約束の手）やろうね。`,
                },
                {
                    name: "Jenny",
                    imgUrl: "./images/comment/jenny.png",
                    title: `恭喜終於畢業～
                    <br>感謝在製作部門時的各種協助，祝新工作一切順利！`,
                },
                {
                    name: "DAMIAN",
                    imgUrl: "./images/comment/damian.png",
                    title: `我希望你可以快快樂樂，做你喜歡做的事情。你的能量是能夠讓人感動的，我覺得下一個你去的地方，能量也一定能夠那麽的美滿。謝謝你的付出！希望後續還能夠合作！`,
                },
                {
                    name: "Fujiwara",
                    imgUrl: "./images/comment/fujiwara.png",
                    title: `Hanew、STAでの仕事お疲れさまでした。社内活動では盛り上げてくれたり、またクライアントのイベントでも能力をたくさん発揮してくれてありがとう！これからもHanewの力が必要なので引き続きよろしくね！頑張りましょう`
                },
                {
                    name: "Daphne",
                    imgUrl: "./images/comment/daphne.png",
                    title: `謝謝黑奴過去對我的指導與幫助，祝福黑奴未來一切順利!`,
                },
                {
                    name: "Jamie",
                    imgUrl: "./images/comment/jamie.png",
                    title: `Dear 黑奴 : 很開心很慶幸在你畢業前有短暫的工作交集> < , 黑奴除了講話很好笑之外 , 也是個非常盡責的上長 , 真心希望你未來的事業能夠一帆風順 , 貸款速速繳清 , 還有身體健康感情順利天天快樂唷唷唷 ^ ^`,
                },
                {
                    name: "Yufang",
                    imgUrl: "./images/comment/yufang.png",
                    title: `謝謝黑奴這一年多以來的照顧、以及這半年以來的各種指導！
                    <br>不管是工作上的意見、還是在案件的調整上，黑奴總是會給我很多協助，才能順利讓案件能夠順利持續進行！也很謝謝黑奴總是會帶給大家很多歡笑，讓製作部總是充滿開心的氣氛！
                    <br>祝福黑奴未來也能夠在新的領域發光發熱！`,
                },
                {
                    name: "Kimi",
                    imgUrl: "./images/comment/kimi.png",
                    title: `Dear Hanew 畢業快樂！要先謝謝Hanew推坑STARTOASIA 我真的很喜歡現在的工作，雖然起步比其他人晚很多，但很謝謝Hanew的各方協助，以及活絡整個工作時的氛圍，雖然不知道接下來的製作部會如何，但Hanew的表單跟精神要與我們同在阿阿阿阿`,
                },
                {
                    name: "Erika",
                    imgUrl: "./images/comment/erika.png",
                    title: `亞星通最強表哥畢業快樂！謝謝黑奴總是帶給製作部，甚至是全公司歡樂的氛圍～真難想像之後過了18點再也聽不到「下班囉～！」的聲音>< 希望黑奴未來一切順利開心，想實現的理想都能達成✨`,
                },
            ]
    },
    {
        member: "Kasa",
        num:"27",
        CompetitionDay:"2016/3/1",
        ManagementUpDay:"2020/1/1",
        experience:"WEB部門-制作→海外部門→制作部門→IMD部門-制作",
        experiencePJ:"イベントPJ",
        mouthTitle:"好想睡喔！、蛤～？（眼睛睜大）、我要去樓下買咖啡、嘿啊",
        content:
            [
                {
                    name: "Laoutu",
                    imgUrl: "./images/comment/laoutu.png",
                    title: `初代天蠍小隊，一起玩樂一起被整(咦)，樂觀正向的態度是你最大的標誌，以後也要一直維持下去，朝著自己理想的目標前進呦!`,
                },
                {
                    name: "Jake",
                    imgUrl: "./images/comment/jake.png",
                    title: `親愛的同期戰友傘><  雖然我早早就畢業但是很開心緣分延續至今~~~ 今後無論往哪去也一定會順利的~~~ 還要一起吃吃喝喝大聊大玩到很久以後!`,
                },
                {
                    name: "Chuhan",
                    imgUrl: "./images/comment/chuhan.png",
                    title: `雖然跟Kasa的交集比較沒那麼多，感覺Kasa也是很照顧Member~`,
                },
                {
                    name: "Rio",
                    imgUrl: "./images/comment/rio.png",
                    title: `恭喜Kasa老師畢業啦🎉🎉 雖然工作上好像沒有什麼機會合作過，但在上coding課程時，給予一些補充，讓我了解到各種小細節，會使大家學習上更清楚，祝你未來一切順利天天開心🎉🎉 by RIo`,
                },
                {
                    name: "Lun",
                    imgUrl: "./images/comment/lun.png",
                    title: `Dear KASA：
                    <br>在亞星通最印象深刻的就是一起負責美樂思的那段日子，
                    <br>儘管當時挑戰滿滿，但一起討論研究，最後做出很多厲害的製作物，真的非常有趣也很開心！
                    <br>謝謝妳在工作中、生活中總是給我依靠，離開公司後我們還要繼續聯繫，常常一起出門玩唷：）
                    <br>這段在亞星通的日子真是辛苦了，接下來要好好休息唷，找到再出發的力量♡`,
                },
                {
                    name: "Kyoka",
                    imgUrl: "./images/comment/kyoka.png",
                    title: `感謝KASA在我即便沒有出聲表達困難的時候，還願意主動關心我的狀況。跟KASA一起工作也總是非常愉快~！祝福KASA身體健康、天天開心~~`,
                },
                {
                    name: "Weaver",
                    imgUrl: "./images/comment/weaver.png",
                    title: `yo 傘姐 畢業快樂！(雖然共事時間沒有很長～)祝福你一路順風！`,
                },
                {
                    name: "Tako",
                    imgUrl: "./images/comment/tako.png",
                    title: `Dear Kasa
                    <br>身為花蓮同鄉覺得很不捨QQ
                    <br>可愛的學姊要離開通通了
                    <br>剛入社的時候在HRC團隊跟Kasa學到很多
                    <br>每次素材分享會都能得到各種靈感
                    <br>謝謝Kasa總是不吝嗇給予大家的idea稱讚
                    <br>有這麼溫柔的前輩在，
                    <br>讓當時還是新人的我備感安心💗
                    <br>希望之後也能有機會在花蓮市/台北市巧遇KasaXD
                    <br>祝福Kasa畢業快樂！
                    <br>一切平安順利，繼續做自己熱愛的事🔥by Tako`,
                },
                {
                    name: "Tsuki",
                    imgUrl: "./images/comment/tsuki.png",
                    title: `在工作上雖然沒有太多跟Kasa合作的機會，但是總是會覺得Kasa就像一個大姊姊一樣，非常的有氣質，對人溫和~尤其是在每月發表部門MVP時，都會覺得Kasa真的是很愛自己的Member，帶著愛在述說大家的優點跟事蹟，讓人聽完都感覺心情很好~
                    <br>從亞星通畢業後，也祝福妳運用這樣溫暖的特質在別的道路上繼續發光發熱喔~`,
                },
                {
                    name: "Ruby",
                    imgUrl: "./images/comment/ruby.png",
                    title: `恭喜妳要展開新的人生篇章。未來的日子一定順～`,
                },
                {
                    name: "Nita",
                    imgUrl: "./images/comment/nita.png",
                    title: `還記得當初最終面試時是Kasa跟山田さん，那時候覺得兩位面試官講話都好溫柔，也很謝謝Kasa在面試時幫我簡單翻譯(那時候的日文真的是破破的😅)
                    <br>跟Kasa在工作上的交集是在這期短影片戰術才稍微多一點，很謝謝Kasa總是能細心地看待我們每個作品並給予建議，好捨不得即將畢業的Kasa😢祝福Kasa之後都能順利開心~健健康康🥰`,
                },
                {
                    name: "Kashin",
                    imgUrl: "./images/comment/kashin.png",
                    title: `印象深刻當初第一次面試是kasa跟ade幫我面試，本來以為面試會滿嚴肅，但是你們都超級溫柔嗚嗚嗚！入社後交接海外snobs時mass也常常在其中協助😭真的非常感謝嗚嗚嗚嗚嗚`,
                },
                {
                    name: "Yang",
                    imgUrl: "./images/comment/yang.png",
                    title: `謝謝KASA帶我進入亞星通，讓我可以在這裡做各式各樣的嘗試，無論是製作物、企劃、甚至是coding，真的很感謝，未來也會繼續努力！`,
                },
                {
                    name: "米玄",
                    imgUrl: "./images/comment/gen.png",
                    title: `從第一次見面(面試)開始到現在，一直都覺得學姐很親切、很像海外部的大姊姊，有任何問題或需求都可以找學姊討論，而且所有問題都會被學姊重視，這點讓我覺得非常的安心！
                    <br>我在公司有像學姊這樣的上長是一件非常幸運的事情~也謝謝學姊教會我們很多關於企劃的知識，讓我可以學到很多東西！
                    <br>最後恭喜要畢業了！祝福學姊永遠都心想事成~
                    <br>想做什麼，什麼都會實現！身體健康、永遠開開心心~🌹`,
                },
                {
                    name: "Nico",
                    imgUrl: "./images/comment/nico.png",
                    title: `從我剛到亞星通當企劃開始，學姊一直很照顧我，仔細調整我的設計，讓我做圖的質感越來越提升！在工作上遇到什麼狀況都會給予我方向和解決方式，一直把我的話放在心裡，有機會就會馬上找我討論，一直以來對學姊都是滿滿的感謝，不只是在工作上、我的未來職涯方面也給予我很多的幫助，在學姊底下做事讓我覺得非常安心也很快樂，希望學姊畢業後可以順順利利、開開心心！！畢業快樂💕💕💕`,
                },
                {
                    name: "Nina",
                    imgUrl: "./images/comment/nina.png",
                    title: `KASA老師畢業快樂！！！謝謝一年的照顧～終於也輪到KASA了～相信接下來的一切都會順順利利！祝福KASA健康、快樂、想做的事都可以完成！我相信不管KASA到哪裡都會繼續閃閃發光的～(｡ì _ í｡)`,
                },
                {
                    name: "Peko",
                    imgUrl: "./images/comment/peko.png",
                    title: `感謝傘成為我轉正後的第一任馬內
                    <br>有很多不懂的地方kasa都很細心的解說
                    <br>真的非常感謝
                    <br>祝福未來一切順利！`,
                },
                {
                    name: "Tsuzuki",
                    imgUrl: "./images/comment/tsuzuki.png",
                    title: `話したことないですけど存在は知ってました笑
                    <br>長い間お疲れ様でした！`,
                },
                {
                    name: "Kawai",
                    imgUrl: "./images/comment/kawai.png",
                    title: `KASA！愛你🫶🏻`,
                },
                {
                    name: "Sen",
                    imgUrl: "./images/comment/sen.png",
                    title: `最可愛溫柔製作物又最漂亮的Kasa 恭喜畢業～～相信Kasa老師不管到哪都一定能成為製作物的第一把交椅！希望之後也有別的機會跟Kasa 老師合作～`,
                },
                {
                    name: "Yoji",
                    imgUrl: "./images/comment/yoji.png",
                    title: `長い間STAを支えてくれてありがとう！僕がSTAに参画したのは海外チームがスタートで、そのときからいつも優しく対応してくれてありがとう。JudyやDeanたちとのチームが今でも懐かしいです。僕が海外チームを見なくなってから、僕が一切必要ない感じでどんどん海外チームが成長していくのをみていて、若干の複雑な気持ちはありながら（？）、うれしく感じてました。頑張っているDamianやKasaに刺激ももらっていました。支えてくれて本当にありがとう。　次の場所でも頑張っていってね！`,
                },
                {
                    name: "Kyanemoto",
                    imgUrl: "./images/comment/kyanemoto.png",
                    title: `STAの初期、安田さんがWEB部門を立ち上げた当初からWEB制作などに尽力してくれてありがとう！
                    <br>（安田さんが一度採用見送って後に再度採用で連絡したというエピソードが印象的です。笑
                    <br>そんなむちゃくちゃな時代からSTAに関わってくれて本当にありがとう！）
                    <br>
                    <br>今のWEB関連の発展があるのはkasaが色々と尽力してくれたことも大きいと思うので、改めて感謝です。
                    <br>当時から部門が異なったりなどで仕事上でがっつり関わるというものは少なかったと思うけど、管理職合宿や経営メンバーを入れ替えての1on1などで話す際に、いつも自然体なイメージと雰囲気を創ってくれているのが印象的でした。また、海外部門に挑戦したりなど挑戦心も高く、そんなkasaに会社としても救われた部分も大きいと思います。
                    <br>今回、会社の状況面に関しては申し訳ない気持ちと退職になってしまうのは寂しい部分もありますが、新たな一歩が幸せに満ち溢れるものとなりますように願っています！`,
                },
                {
                    name: "Miki",
                    imgUrl: "./images/comment/miki.png",
                    title: `8年4ヵ月、本当にお疲れ様でした。
                    <br>
                    <br>一緒に管理職合宿の企画～実行をしたこと、
                    <br>マネジメントで悩んだ日々・・
                    <br>楽しいことも、つらいこともあったけど、
                    <br>思い出すのはKasaの笑顔です☺（顔文字）
                    <br>
                    <br>どんな時も笑顔を絶やさず、冷静で、相手を想い、行動する。
                    <br>同じ働く女性として、そんなKasaを尊敬しています。
                    <br>
                    <br>STAを離れてもこれからもよろしくね！`,
                },
                {
                    name: "AO",
                    imgUrl: "./images/comment/ao.png",
                    title: `これからも僕のお家にいっぱい遊びにきてね。`,
                },
                {
                    name: "Jenny",
                    imgUrl: "./images/comment/jenny.png",
                    title: `真的是到現在還無法相信你比我早畢業了！但也真的這8年多來辛苦了～～～
                    <br>看著努力的KASA一路上的成長，是我在通通繼續努力的動力之一，回想起這8年多，真心感謝交到你這樣的貼心好友，就算不是在同一個部門也一路從member到manager互相扶持幫忙走到今天，雖然接下來我將成為STA除了經營層外員編第一位的老兵，覺得感傷之餘我也會連大家的份起努力的！別忘了每個月一次的午餐約會：）`,
                },
                {
                    name: "DAMIAN",
                    imgUrl: "./images/comment/damian.png",
                    title: `對你的愛應該不是文字能夠表現的出來的，我的千言萬語雖然留在我的心中，但是想和KASA說，心裏總是有一個很大的位置給你，而很多都是我們一起努力過的感謝心情以及體會領悟。`,
                },
                {
                    name: "Fujiwara",
                    imgUrl: "./images/comment/fujiwara.png",
                    title: `Kasa、これまでのSTAでの仕事本当にお疲れさまでした！Kasaがいまの制作チームの基礎を作ってきてくれたと思います。これからも公私ともによろしくね！また一緒に食事しようね`,
                },
                {
                    name: "Dephne",
                    imgUrl: "./images/comment/daphne.png",
                    title: `祝KASA畢業快樂~祝福未來一帆風順、事事順心!`,
                },
                {
                    name: "Jamie",
                    imgUrl: "./images/comment/jamie.png",
                    title: `Dear Kasa : 到現在都還印象深刻在亞星通二次面試是Kasa唷~第一次見面 , 就覺得Kasa非常親切 , 臉上總是笑咪咪的 , 雖然工作上沒有經常性的交集 , 但Kasa就是給人一種溫暖感覺 , 希望Kasa未來每一天都是平安健康開心的唷~`,
                },
                {
                    name: "Yufang",
                    imgUrl: "./images/comment/yufang.png",
                    title: `謝謝Kasa在我來到亞星通的這一年多以來的照顧！
                    <br>雖然在業務上的交流比較少，但是在剛到亞星通還跟大家不太孰悉的時候，Kasa都會很耐心的和Jenny一起帶我孰悉環境，真的非常感謝Kasa！
                    <br>希望Kasa未來在新的環境也能每天開心、往自己心目中的目標邁進！`,
                },
                {
                    name: "Kimi",
                    imgUrl: "./images/comment/kimi.png",
                    title: `Dear KASA 畢業快樂！希望接下來無論是工作或是生活都能事事順心，依循著KASA的期許的目標前進。`,
                },
                {
                    name: "Erika",
                    imgUrl: "./images/comment/erika.png",
                    title: `KASA畢業快樂！雖然平時比較沒有案件上的交集，最後謝謝KASA在十期短影片戰術總是提供很多想法及建議！希望KASA未來一切順利開心，想實現的理想都能達成✨`,
                },
            ]
    },
]
function change_content(title) {
    if (title=='About') {
        var element = document.getElementById("m0");
        element.innerHTML = "\n" +
            "        <div aria-labelledby=\"content\" class=\"content\">\n" +
            "            <div aria-labelledby=\"avatar\" class=\"circle-pic\">\n" +
            "                <img src=\"src/avatar.jpg\" alt=\"avatar\">\n" +
            "            </div>\n" +
            "            <div aria-labelledby=\"text-introduction\" class=\"bio-info\">\n" +
            "                <h1>Yunqi He</h1>\n" +
            "                <h4>M.S. in Computer Engineering</h4>\n" +
            "                <div aria-labelledby=\"address\" class=\"address\">\n" +
            "\n" +
            "                    <div>McCormick School of Engineering</div>\n" +
            "                    <div>Northwestern University</div>\n" +
            "                </div>\n" +
            "                <div aria-labelledby=\"contact-info\" class=\"contact-info\">\n" +
            "                    <div aria-labelledby=\"contact-icons\" class=\"contact-icons\">\n" +
            "                        <a href=\"https://www.facebook.com/yunqi.he.73\"><i class=\"material-icons\">facebook</i></a>\n" +
            "                        <a href=\"https://steamcommunity.com/id/Sigrun-MH/\"><i class=\"material-icons\">sports_esports</i></a>\n" +
            "                    </div>\n" +
            "                    <div><i class=\"material-icons\">settings_cell</i> (773)290-0801</div>\n" +
            "                    <div><i class=\"material-icons\">email</i> <a href=\"Mailto:yunqihe2021@u.northwestern.edu\">yunqihe2021@u.northwestern.edu</a></div>\n" +
            "                    <div><i class=\"material-icons\">room</i> 1915 Maple Avenue, Evanston, IL 60201</div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
    } else if (title=='Experience') {
        var element = document.getElementById("m0");
        element.innerHTML = "\n" +
            "        <div aria-labelledby=\"content\" class=\"content\">\n" +
            "            <div aria-labelledby=\"education-info\" class=\"edu-entry\">\n" +
            "                <h3>2019.09-Now</h3>\n" +
            "                <h4>McCormick School of Engineering, Northwestern University</h4>\n" +
            "                <p>My program is a master's degree in computer engineering, and the academic advisor is Professor Hai Zhou. During this time, I was engaged in the research of electronic design automation.</p>\n" +
            "            </div>\n" +
            "            <div aria-labelledby=\"education-info\" class=\"edu-entry\">\n" +
            "                <h3>2017.09-2019.09</h3>\n" +
            "                <h4>Beijing Yidian Science and Technology Co., Ltd</h4>\n" +
            "                <p>This is an Internet startup company that I co-founded with Wang Yao. We hope to make a mobile phone software to promote China's online medical industry.</p>\n" +
            "            </div>\n" +
            "            <div aria-labelledby=\"education-info\" class=\"edu-entry\">\n" +
            "                <h3>2017.06-2017.09</h3>\n" +
            "                <h4>Center for Energy-Efficient Computing and Applications, Peking University</h4>\n" +
            "                <p>The center is affiliated to the School of Information Technology and Science, Peking University. During this time, I was doing research on wireless perception in the wireless reconfigurable system research group of the center. My advisor is Professor Tao Wang.</p>\n" +
            "            </div>\n" +
            "            <div aria-labelledby=\"education-info\" class=\"edu-entry\">\n" +
            "                <h3>2013.09-2017.06</h3>\n" +
            "                <h4>Peking University</h4>\n" +
            "                <p>This has been a very good four years of my life. I received a bachelor's degree in computer science from the School of Information Science and Technology of Peking University.</p>\n" +
            "            </div>\n" +
            "        </div>";
    } else if (title=='Interests') {
        var element = document.getElementById("m0");
        element.innerHTML = "<div aria-labelledby=\"interests\" class=\"content\">\n" +
            "            <div aria-labelledby=\"interests-info\" class=\"int-entry\">\n" +
            "                <div class=\"int-pic\">\n" +
            "                    <img aria-labelledby=\"interests-pic\" src=\"src/interest_1.jpg\" alt=\"interest-pic\">\n" +
            "                </div>\n" +
            "                <div class=\"int-info\">\n" +
            "                    <h1>An amateur guitarist</h1>\n" +
            "                    <p>I am a singing lover and can simply play folk guitar, electric bass and drum set.</p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div aria-labelledby=\"interests-info\" class=\"int-entry\">\n" +
            "                <div class=\"int-pic\">\n" +
            "                    <img aria-labelledby=\"interests-pic\" src=\"src/interest_2.jpg\" alt=\"interest-pic\">\n" +
            "                </div>\n" +
            "                <div class=\"int-info\">\n" +
            "                    <h1>A kayak rower</h1>\n" +
            "                    <p>I am a member of NU Crew. I like boating and swimming very much. Welcome to ask me to play together.</p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
    }
}

$('ul').find('li').click(function() {
    $(this).addClass('active-li').siblings('li').removeClass('active-li');
    change_content($(this).text());
});

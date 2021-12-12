import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  // constructior
  articles = [
    {
      source: { id: null, name: "Delfi.lt" },
      author: "Ieva Kašauskaitė-Petrauskienė",
      title:
        "Arvydas Sabonis – apie tai, kodėl jį ištiko infarktas: neabejoja, kad tai buvo vienas pagrindinių rizikos veiksnių - DELFI",
      description:
        "Miokardo infarktas – tai liga, kuri parklupdyti gali absoliučiai kiekvieną iš mūsų. Jauną, sveiką, stiprų. Taip prieš dešimt metų nutiko ir visame pasaulyje garsiam krepšininkui, sporto legendai – Arvydui Saboniui. Tai kad anuomet sportininkas buvo tikrąja to…",
      url: "https://www.delfi.lt/sveikata/iveik-liga/arvydas-sabonis-apie-tai-kodel-ji-istiko-infarktas-neabejoja-kad-tai-buvo-vienas-pagrindiniu-rizikos-veiksniu.d?id=88924685",
      urlToImage: "https://g2.dcdn.lt/images/pix/arvydas-sabonis-88924775.jpg",
      publishedAt: "2021-12-12T05:48:58Z",
      content:
        "Anot gydytoj, Arvydas iskirtinis pacientas dar ir tuo, kad iki iol labai siningai laikosi vis gydymo rekomendacij, vartoja vaistus, reguliariai tikrinasi sveikat. Btent tai lm, kad jo kraujagysls i n… [+8746 chars]",
    },
    {
      source: { id: null, name: "Express" },
      author: "Mason Quah",
      title:
        "High cholesterol: The best 'cholesterol busting' exercises to lower your levels - Daily Express",
      description:
        "SPORTS scientists have stated that the total volume of exercise is more important than the intensity when it comes to high cholesterol, with intense exercises tiring you out quicker for lower benefits.",
      url: "https://www.express.co.uk/life-style/health/1534365/high-cholesterol-exercises-brisk-walk-swimming",
      urlToImage:
        "https://cdn.images.express.co.uk/img/dynamic/11/750x445/1534365.jpg",
      publishedAt: "2021-12-12T04:00:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Gazzetta.it" },
      author: "Gasport",
      title:
        "Scopre il fitness a 70 anni e diventa un'influencer da 1,5 milioni di follower - La Gazzetta dello Sport",
      description:
        "Su Instagram Joan MacDonald è diventata una star a 70 anni grazie al fitness: ha iniziato ad andare in palestra per la salute, ma ha avuto risultati sorprendenti",
      url: "https://www.gazzetta.it/fitness/allenamento/11-12-2021/joan-macdonald-fitness-influencer-70-anni-d-eta-sua-storia-430371301983.shtml",
      urlToImage:
        "https://images2.gazzettaobjects.it/methode_image/2021/12/08/Active/Foto_Active_-_Trattate/82915f0c-58e9-11ec-b167-49eba7478802_1200x675.jpg?v=202112111813",
      publishedAt: "2021-12-11T17:08:23Z",
      content:
        "Ad oggi sono 1 milione e mezzo gli utenti di Instagram che hanno scelto di seguire Joan MacDonald (@trainwithjoan) di professione pensionata o, per meglio dire… Fit influencer. Dietro gli argentei ca… [+3230 chars]",
    },
  ];
  constructor(props) {
    super();
    this.state = {
      item: " ",
      totalResults: 0,
      title: " ",
      description: " ",
      imgUrl: "",
      MoreUrl: " ",
      author: " ",
    };
   
  }
  componentDidMount() {
    this.setState({
      item: this.articles,
      totalResults: this.articles.totalResults,
      title: this.articles.title,
      description: this.articles.description,
      imgUrl: this.articles.urlToImage,
      MoreUrl: this.articles.url,
      author: this.articles.author,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Top Headlines</h1>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
          <div className="col-md-4">
            <NewsItem title={title} description={description} />
          </div>
        </div>
      </div>
    );
  }
}

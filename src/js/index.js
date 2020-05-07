require("@babel/polyfill");
import Search from "./model/Search";

//  Web App - ийн төлөв 
// Хайлтын query, үр дүн 
// тухайн үзүүлж байгаа жор
// Лайкласан жорууд
// Захиалж байгаа жорын найрлаганууд

const state = {};

const controlSearch = async () => {
    console.log('Дарагдлаа');
    // 1) web -Ээс хайлтын түлхүүр үгийг гаргаж авна.
    const query = 'pizza';
    if(query) {
    // 2) шинээр хайлтын обьетыг үүсгэж өгнө.
    state.search = new Search(query);
    // 3) хайлт хийхэд зориулж дэлгэцийн UI ийг бэлдэнэ.
    // 4) хайлтыг гүйцэтгэнэ.
   await state.search.doSearch();
    // 5) Хайлтын үр дүнг дэлгэцэнд үзүүлнэ. 
    console.log(state.search.result);
    } 

}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

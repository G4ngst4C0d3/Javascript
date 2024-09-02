const config = {
    
};
function createConfig(){
    return  config
}



const widgetConfig = {
    width: "980",
    height: "610",
    symbol: "BINANCE:BTCUSDT",
    interval: "D",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "2",
    locale: "br",
    backgroundColor: "rgba(0, 0, 0, 1)",
    gridColor: "rgba(216, 216, 216, 0.06)",
    hide_legend: true,
    withdateranges: true,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    save_image: false,
    watchlist: [
        "BINANCE:BTCUSDT",
        "COINBASE:BTCUSD",
        "BINANCE:ETHUSDT",
        "BINANCE:SOLUSDT",
        "COINBASE:ETHUSD",
        "BINANCE:XRPUSDT",
        "BINANCE:RUNEUSDT",
        "BINANCE:UNIUSDT",
        "BINANCE:NEARUSDT",
        "CRYPTOCAP:USDC",
        "BINANCE:BNBUSDT",
        "BINANCE:ADAUSDT",
        "BINANCE:AVAUSDT",
        "BINANCE:LINKUSDT",
        "KUCOIN:DOTUSDT"
    ],
    calendar: false,
    hide_volume: true,
    support_host: "https://www.tradingview.com"
  };

  // Converte o objeto em uma string JSON
  const widgetConfigString = JSON.stringify(widgetConfig);

  // Cria o elemento script dinamicamente
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
  script.async = true;

  // Adiciona o conteúdo JSON como texto do script
  script.text = widgetConfigString;

  // Anexa o script ao container
  const widgetContainer = document.querySelector(".tradingview-widget-container");
  widgetContainer.appendChild(script);
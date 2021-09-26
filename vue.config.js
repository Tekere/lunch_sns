module.exports = {
	transpileDependencies: ['vuetify'],
  
  // ホットペッパーAPIのプロキシ
	devServer: {
		proxy: 'http://webservice.recruit.co.jp'
	}
}

const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootc8v27/",
            name: "springbootc8v27",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootc8v27/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "蜗牛兼职网"
        } 
    }
}
export default base

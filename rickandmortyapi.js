// autotest for https://rickandmortyapi.com/api/location

pm.test("Location request successful", function () {
    pm.response.to.have.status(200);
});

pm.test("Body содержит характеристики: тип, жители, URL", function () {
    pm.expect(pm.response.text()).to.include("type");
    pm.expect(pm.response.text()).to.include("residents");
    pm.expect(pm.response.text()).to.include("url");
});

pm.test("Body содержит ссылки локаций", function () {
    pm.expect(pm.response.text()).to.include("rickandmortyapi.com/api/location");
});

pm.test("В headers есть server, x-hf-request-id", function () {
    pm.response.to.have.header("Server");
    pm.response.to.have.header("X-Nf-Request-Id");
});
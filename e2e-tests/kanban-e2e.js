describe('Selenium Test Case', function() {
  it('should execute test case without errors', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    browser.get("http://localhost:5000/");
    element(by.css("button.btn.btn-default")).click();
    element(by.id("inputEmail1")).sendKeys("arevinsky@gmail.com");
    element(by.css("button.btn.btn-default")).click();
    element(by.linkText("Sign Out")).click();
    element(by.id("inputEmail1")).sendKeys();
    element(by.id("inputEmail1")).sendKeys("arevinsky@gmail.com");
    element(by.id("inputEmail1")).sendKeys("arevinsky@gmail.com");
    element(by.id("inputEmail1")).click();
    element(by.css("button.btn.btn-default")).click();
    element(by.xpath("//div[@class='b_board_list']/div[1]/div/div[2]/div")).click();
    element(by.linkText("Close ×")).click();
    element(by.xpath("//div[@class='b_board_list']//span[.='2']")).click();
    element(by.linkText("Close ×")).click();
    element(by.xpath("//div[@class='b_board_list']/div[1]/div/div[4]/div")).click();
    element(by.linkText("Close ×")).click();
    element(by.xpath("//div[@class='b_board_list']/div[1]/div/div[1]/div")).click();
    element(by.css("button.btn.btn-primary")).click();
    element(by.id("inpBoardName")).sendKeys("New test board");
    element(by.css("div.modal-body")).click();
    element(by.id("inpBoardDesc")).sendKeys("simple description");
    element(by.css("button.btn.btn-primary")).click();
    element(by.xpath("//div[@class='b_board_list']//h4[.='New test board']")).click();
    element(by.css("div.b_cnt.m_hor")).click();
    element(by.xpath("//div[@class='b_board']//div[normalize-space(.)='']")).click();
    element(by.xpath("//div[@class='b_board']/div[3]/div[2]/div/div/div")).click();
    element(by.xpath("//div[@class='b_board']/div[3]/div[3]/div/div/div")).click();
    element(by.linkText("Create Task")).click();
    element(by.id("inpTaskTitle")).sendKeys("test task 01");
    element(by.id("inpTaskDesc")).sendKeys("simple description");
    element(by.css("div.modal-footer")).click();
    element(by.css("button.btn.btn-primary")).click();
    element(by.xpath("//div[@class='b_cnt-body']/div/div[3]/div[2]")).click();
    element(by.xpath("//div[@class='b_board']/div[3]/div[1]/div/div/div")).click();
    element(by.xpath("//div[@class='b_board']//div[normalize-space(.)='']")).click();
    element(by.xpath("//div[@class='b_board']/div[3]/div[2]/div/div/div")).click();
    element(by.xpath("//div[@class='b_board']/div[3]/div[3]/div/div/div")).click();
    element(by.linkText("H")).click();
    element(by.css("div.modal-dialog > div.modal-content > div.modal-footer > button.btn.btn-default")).click();
    element(by.xpath("//div[@class='b_board']/div[3]/div[3]/div/div/div")).click();
    element(by.css("div.b_cnt.m_hor")).click();
    element(by.xpath("//div[@class='b_cnt-body']/div/div[3]/div[1]/a[2]")).click();
    element(by.xpath("//div[@id='deleteTaskModal']/div/form/div/div[2]/div[1]/input")).click();
    element(by.xpath("//div[@id='deleteTaskModal']/div/form/div/div[2]/div[2]/input")).click();
    element(by.xpath("//div[@id='deleteTaskModal']/div/form/div/div[2]/div[3]/textarea")).click();
    element(by.css("button.btn.btn-danger")).click();
    element(by.linkText("Close ×")).click();
    element(by.xpath("//div[@class='b_board_list']/div[1]/div/div[14]/div")).click();
    element(by.linkText("Sign Out")).click();
  });
});

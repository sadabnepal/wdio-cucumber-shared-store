import Page from './page';

class LoginPage extends Page {

    private get inputUsername() { return $('#username'); }
    private get inputPassword() { return $('#password'); }
    private get btnSubmit() { return $('button[type="submit"]'); }
    public get username() { return $("//em"); }
    public get flashAlert() { return $('#flash'); }

    open() {
        return super.open('login');
    }

    async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

export default new LoginPage();

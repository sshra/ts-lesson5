class HttpResponse2<D, E> {
  protected success: boolean;
  protected data?: D;
  protected code?: E;

  constructor(success:boolean, data?: D, error?: E) {
    this.success = success;
    if (data) {
      this.data = data;
    }
    if (error) {
      this.code = error;
    }
  }
}

const responseToken = new HttpResponse2<number, unknown>(true, 876945868)
const responseUser = new HttpResponse2<string, unknown>(true, 'Gennadiy Ivanoff')

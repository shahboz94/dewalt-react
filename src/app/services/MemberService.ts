import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async signup(input: MemberInput): Promise<Member> {
    try {
      const result = await axios.post(`${this.path}/member/signup`, input, {
        withCredentials: true,
      });
      console.log("signup:", result);

      const member: Member = result.data;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, signup:", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    try {
      const result = await axios.post(`${this.path}/member/login`, input, {
        withCredentials: true,
      });
      console.log("login:", result);

      const member: Member = result.data;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Error, login:", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      await axios.post(
        `${this.path}/member/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("memberData");
    } catch (err) {
      console.log("Error, logout:", err);
      throw err;
    }
  }

  public async getChosenMember(id: string): Promise<Member> {
    try {
      const result = await axios.get(`${this.path}/member/${id}`, {
        withCredentials: true,
      });
      console.log("getChosenMember:", result);
      return result.data;
    } catch (err) {
      console.log("Error, getChosenMember:", err);
      throw err;
    }
  }
}

export default MemberService;

import axios from "axios";
import results from "@/views/Results.vue";
import { mount } from "@vue/test-utils";

jest.mock("axios");

test("should fetch user", async () => {
  const user = {
    login: "DerProfi",
    id: 43568019,
    node_id: "MDQ6VXNlcjQzNTY4MDE5",
    avatar_url: "https://avatars.githubusercontent.com/u/43568019?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/DerProfi",
    html_url: "https://github.com/DerProfi",
    followers_url: "https://api.github.com/users/DerProfi/followers",
    following_url:
      "https://api.github.com/users/DerProfi/following{/other_user}",
    gists_url: "https://api.github.com/users/DerProfi/gists{/gist_id}",
    starred_url: "https://api.github.com/users/DerProfi/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/DerProfi/subscriptions",
    organizations_url: "https://api.github.com/users/DerProfi/orgs",
    repos_url: "https://api.github.com/users/DerProfi/repos",
    events_url: "https://api.github.com/users/DerProfi/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/DerProfi/received_events",
    type: "User",
    site_admin: false,
    name: "Leon Nothegger",
    company: null,
    blog: "",
    location: "Berlin",
    email: null,
    hireable: null,
    bio: "Hi, I'm Leon, junior frontend developer. 📚 ",
    twitter_username: null,
    public_repos: 8,
    public_gists: 0,
    followers: 2,
    following: 14,
    created_at: "2018-09-25T08:29:25Z",
    updated_at: "2021-11-01T11:16:40Z",
  };
  const resp = {
    data: user,
  };
  const $route = {
    query: {
      search: "derprofi",
    },
  };
  axios.get.mockResolvedValue(resp);
  const wrapper = await mount(results, {
    mocks: {
      $route,
    },
  });
  await wrapper.vm.$nextTick();
  await wrapper.vm.$forceUpdate();
  expect(wrapper.html()).toContain(
    '<h1 data-testid="informationHeading">Information about derprofi</h1>'
  );
});

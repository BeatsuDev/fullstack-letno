package no.ntnu.fullstack.backend.quiz;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Collections;
import no.ntnu.fullstack.backend.category.component.Startup;
import no.ntnu.fullstack.backend.quiz.model.Quiz;
import no.ntnu.fullstack.backend.quiz.model.Revision;
import no.ntnu.fullstack.backend.quiz.repository.QuizRepository;
import no.ntnu.fullstack.backend.quiz.repository.RevisionRepository;
import no.ntnu.fullstack.backend.security.UserDetailsImpl;
import no.ntnu.fullstack.backend.security.UserDetailsServiceImpl;
import no.ntnu.fullstack.backend.user.UserRepository;
import no.ntnu.fullstack.backend.user.model.User;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.TestingAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class QuizControllerIntegrationTest {

  @Autowired RevisionRepository revisionRepository;
  @Autowired private MockMvc mockMvc;
  @MockBean private UserDetailsServiceImpl userDetailsService;
  @Autowired private Startup startup;
  @Autowired private UserRepository userRepository;
  @Autowired private QuizRepository quizRepository;
  @MockBean private UserDetailsImpl userDetails;

  @BeforeEach
  public void setup() {
    revisionRepository.deleteAll();
    quizRepository.deleteAll();
    userRepository.deleteAll();
    startup.onApplicationEvent(null);

    User user = new User();
    user.setEmail("user@example");
    user.setPassword("password");
    user.setName("user");
    userRepository.save(user);
    userDetails = new UserDetailsImpl(user);

    Authentication auth = new TestingAuthenticationToken(user, "password", Collections.emptyList());
    SecurityContextHolder.getContext().setAuthentication(auth);

    when(userDetailsService.loadUserByUsername(anyString())).thenReturn(userDetails);
  }

  @Test
  public void createQuiz_ValidRequest_ReturnsQuiz() throws Exception {
    JSONObject quizCreate = new JSONObject();
    quizCreate.put("title", "Example Quiz");
    quizCreate.put("description", "An example quiz.");
    quizCreate.put("category", "[]");
    quizCreate.put("difficulty", 1);

    mockMvc
        .perform(
            post("/quiz").contentType(MediaType.APPLICATION_JSON).content(quizCreate.toString()))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.title").value("Example Quiz"))
        .andExpect(jsonPath("$.description").value("An example quiz."));
  }

  @Test
  public void createQuiz_0Difficulty_ReturnsBadRequest() throws Exception {
    JSONObject quizCreate = new JSONObject();
    quizCreate.put("title", "Example Quiz");
    quizCreate.put("description", "An example quiz.");
    quizCreate.put("category", "[]");
    quizCreate.put("difficulty", 0);

    mockMvc
        .perform(
            post("/quiz").contentType(MediaType.APPLICATION_JSON).content(quizCreate.toString()))
        .andExpect(status().isBadRequest());
  }

  @Test
  public void getQuiz_CorrectId_ReturnsQuiz() throws Exception {
    Quiz quiz = new Quiz();
    quiz.setCreator(userRepository.findAll().get(0));
    quiz = quizRepository.saveAndFlush(quiz);

    Revision revision = new Revision();
    revision.setCategories(Collections.emptyList());
    revision.setCreator(userRepository.findAll().get(0));
    revision.setDescription("description");
    revision.setDifficulty(1);
    revision.setQuestions(Collections.emptyList());
    revision.setTitle("title");
    revision.setQuiz(quiz);
    revisionRepository.saveAndFlush(revision);

    mockMvc
        .perform(get("/quiz/" + quiz.getId()))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.title").value("title"))
        .andExpect(jsonPath("$.description").value("description"));
  }

  @Test
  public void createQuiz_EmptyTitle_ReturnsBadRequest() throws Exception {
    JSONObject quizCreate = new JSONObject();
    quizCreate.put("title", "");
    quizCreate.put("description", "An example quiz.");
    quizCreate.put("category", "[]");
    quizCreate.put("difficulty", 0);

    mockMvc
        .perform(
            post("/quiz").contentType(MediaType.APPLICATION_JSON).content(quizCreate.toString()))
        .andExpect(status().isBadRequest());
  }

  @Test
  public void fetchQuiz_ValidRequest_ReturnsQuiz() throws Exception {
    mockMvc.perform(get("/quiz")).andExpect(status().isOk());
  }
}

import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { VoteComponent } from "./vote.component"




/* Incomplete! */
describe('VoteComponent', () => {
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement: DebugElement;

  // Arrange
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VoteComponent);
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should increment totalVotes when upvoted', () => {
    // Act
    let component = new VoteComponent();

    component.downVote()
    expect(component.totalVotes).toBe(-1)

 //act
 component.upVote();
 //assert
 expect(component.totalVotes).toBe(1)

  });
});

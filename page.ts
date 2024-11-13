import { FrameLocator, Locator, Page } from "@playwright/test";

export class RenderingEngine {
  
  constructor(readonly page: Page) {}

  readonly renderingEngineIFrameSelector: string =
    'iframe:is([name="webclient-frame"],[name="rendering-engine-frame"])';
  readonly renderingEngineIFrame: FrameLocator = this.page.frameLocator(this.renderingEngineIFrameSelector);
  readonly renderingEngineWrapper: Locator = this.renderingEngineIFrame.locator("id=rapport-container-wrapper");
  readonly rapportContainer: Locator = this.renderingEngineWrapper.locator("id=scrollable-rapport-container");
  readonly summaryViewHolder: Locator = this.renderingEngineWrapper.locator("id=summaryViewHolder");
  readonly layoutContainerColumnLoc = (colId: number): Locator =>
    this.summaryViewHolder.locator(`div[hub-layout-container-column-id='${colId}']`);
}

import 'reflect-metadata'
import * as fixtureEntities from '../../domain/entities/__tests__/fixture/index'
import { SheetInteractor } from '../sheetInteractor'
import { ISheetRepository } from '../../domain/interface/repository/ISheetRepository'
import SheetDate from '../../domain/value/sheetDate'

describe('SheetInteractor', () => {
  let interactor: SheetInteractor
  let sheetRepositoryMock: jest.Mocked<ISheetRepository>

  beforeEach(() => {
    sheetRepositoryMock = {
      querySheetByDateRange: jest.fn(),
    } as jest.Mocked<ISheetRepository>

    interactor = new SheetInteractor(sheetRepositoryMock)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('querySheetByDateRange should be called', async () => {
    const sheet = fixtureEntities.sheet
    sheetRepositoryMock.querySheetByDateRange.mockResolvedValue(sheet)
    const params = {
      id: '1',
      startDate: '2024-01-01',
      endDate: '2024-01-01',
    }
    await interactor.querySheetByDateRange(params)
    const expectedParams = {
      id: '1',
      startDate: new SheetDate(params.startDate),
      endDate: new SheetDate(params.endDate),
    }
    expect(sheetRepositoryMock.querySheetByDateRange).toHaveBeenCalledWith(
      expectedParams,
    )
  })
})
